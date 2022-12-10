const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const _ = require("lodash");
const { Document, Validate } = require("../models/document");
const { hasing } = require("../helpers/hash");
const mongoose = require("mongoose");
const router = express();
var aws = require("aws-sdk");
const Multer = require("multer");
var multerS3 = require("multer-s3");

var s3 = new aws.S3({
  accessKeyId: "Vaishnavi",
  secretAccessKey: "mdy3xO/XeBe7I7zmWFLdRKUHJzQoxiWBAIC1YHzs",
});
const storage = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./blog_Images/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") +
        file.originalname.replace(/ /g, "_")
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "pdf" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only Images or PDF are allowed"), false);
  }
};
const upload = Multer({ storage: storage, fileFilter: fileFilter });

var uploadS3 = Multer({
  storage: multerS3({
    s3: s3,
    bucket: "emswebassignment",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(
        null,
        new Date().toISOString().replace(/:/g, "-") +
          file.originalname.replace(/ /g, "_")
      );
    },
  }),
});
const multipleFileUpload = uploadS3.fields([
  { name: "document", maxCount: 10 },
]);

router.get("/", async (req, res) => {
  const docuemtns = await Document.find({ useriid: req.params.id }).sort(
    "createdDate"
  );
  res.send(
    _.map(
      docuemtns,
      _.partialRight(_.pick, ["_id", "tittle", "userid", "description", "path"])
    )
  );
});

router.get("/:id", async (req, res) => {
  console.log("employee ud", req.params.id);
  const doc = await Document.find()
    .where("userid")
    .equals(req.params.id)
    .populate("userid");
  if (!doc) return res.status(404).send({ error: "No Post exist." });
  res.send(doc);
});

router.post("/", multipleFileUpload, async (req, res) => {
  console.log(req.files);
  // const { error } = Validate(req.body);
  // if (error) return res.status("400").send(error.details[0].message);
  const document = await Document.findOne({
    tittle: req.body.tittle,
  });

  if (document) {
    return res.status("400").send({ error: "document already uploaded." });
  }

  let doc = new Document(
    _.pick(req.body, ["tittle", "path", "userid", "description", "path"])
  );
  doc.path = req.files.document[0].location;

  doc = await doc.save();
  res.send(_.pick(doc, ["_id", "userid", "createdDate", "description"]));
});
router.put("/", multipleFileUpload, async (req, res) => {
  console.log(req.files);
  const { error } = Validate(req.body);
  if (error) return res.status("400").send(error.details[0].message);
  const blogs = await Blog.findOne({
    tittle: req.body.tittle,
  });

  if (blogs) return res.status("400").send({ error: "Post already uploaded." });
  let blog = new Blog(_.pick(req.body, ["userid", "path", "tittle"]));
  blog.tittleImage = req.files.tittleImage[0].path;
  blog.silderFirstImage = req.files.silderFirstImage[0].path;
  blog.silderSecoundImage = req.files.silderSecoundImage[0].path;
  blog.silderThirdImage = req.files.silderThirdImage[0].path;
  blog = await blog.save();
  res.send(_.pick(blog, ["_id", "userid", "tittle", "path"]));
});

router.delete("/:id", async (req, res) => {
  const doc = await Document.findByIdAndRemove(req.params.id);
  if (!doc) res.status(404).send({ error: "No document exist." });
  res.send(doc);
});
module.exports = router;
