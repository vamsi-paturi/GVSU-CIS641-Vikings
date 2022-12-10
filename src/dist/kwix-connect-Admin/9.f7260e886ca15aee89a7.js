(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "6WP/": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "TaxiModule", function () {
          return or;
        });
      var a = n("ofXK"),
        r = n("tyNb"),
        o = n("fXoL"),
        i = n("RUz7"),
        l = n("NCLd"),
        d = n("aXei"),
        s = n("3Pt+");
      const c = function (e, t) {
          return { "min-height": e, "max-height": t };
        },
        m = function () {
          return ["/taxi/dashboard"];
        },
        p = function () {
          return ["/taxi/information"];
        },
        u = function () {
          return ["/taxi/user-list"];
        },
        g = function () {
          return ["/taxi/accounts"];
        },
        h = function () {
          return ["/taxi/hotel-list"];
        },
        f = function () {
          return ["/taxi/booking-list"];
        },
        v = function () {
          return ["/taxi/device-list"];
        },
        S = function () {
          return ["/taxi/qremployee-list"];
        },
        x = function () {
          return ["/taxi/reports"];
        };
      let b = (() => {
        class e {
          constructor(e, t, n, a) {
            (this.taxiservice = e),
              (this.commonService = t),
              (this.router = n),
              (this.propertiesService = a);
          }
          ngOnInit() {
            this.tbody = this.propertiesService.length;
          }
          logout() {
            this.taxiservice.logout().subscribe(
              (e) => {
                this.router.navigate(["/auth/login"]),
                  this.commonService.toast("Logout successfully", "Success");
              },
              (e) => {
                this.commonService.toast(e.error.message, "Error");
              }
            );
          }
          redirectTo(e) {
            this.router
              .navigateByUrl("/", { skipLocationChange: !0 })
              .then(() => this.router.navigate([e]));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-sidebar"]],
            decls: 44,
            vars: 31,
            consts: [
              [1, "left-sidebar-wrapper", "fixme", "outer", 3, "ngStyle"],
              [1, "site-branding"],
              ["src", "assets/img/Logohd.png", "alt", "", 1, "img-fluid"],
              [1, "nav", "flex-column"],
              [1, "nav-item"],
              [
                "routerLinkActive",
                "active",
                1,
                "nav-link",
                3,
                "routerLink",
                "click",
              ],
              [1, "nav-item", "copyright"],
              [
                "routerLinkActive",
                "active",
                "data-target",
                "#confirmlogout",
                "value",
                "Delete",
                "data-toggle",
                "modal",
                "href",
                "javascript:;",
                1,
                "nav-link",
                2,
                "background-image",
                "-webkit-linear-gradient(#e4a22f,#d8762d )",
                "margin-bottom",
                "5vh",
              ],
              [
                "id",
                "confirmlogout",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "confirmlogoutLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog"],
              [1, "modal-content"],
              [1, "modal-body"],
              [1, "modal-footer"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-secondary",
              ],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-primary",
                3,
                "click",
              ],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "div", 0),
                o["\u0275\u0275elementStart"](1, "div", 1),
                o["\u0275\u0275element"](2, "img", 2),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](3, "ul", 3),
                o["\u0275\u0275elementStart"](4, "li", 4),
                o["\u0275\u0275elementStart"](5, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/dashboard");
                }),
                o["\u0275\u0275text"](6, "Dashboard"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](7, "li", 4),
                o["\u0275\u0275elementStart"](8, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/information");
                }),
                o["\u0275\u0275text"](9, "Information"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](10, "li", 4),
                o["\u0275\u0275elementStart"](11, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/user-list");
                }),
                o["\u0275\u0275text"](12, "Users"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](13, "li", 4),
                o["\u0275\u0275elementStart"](14, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/accounts");
                }),
                o["\u0275\u0275text"](15, "My Account"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](16, "li", 4),
                o["\u0275\u0275elementStart"](17, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/hotel-list");
                }),
                o["\u0275\u0275text"](18, "Venues"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](19, "li", 4),
                o["\u0275\u0275elementStart"](20, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/booking-list");
                }),
                o["\u0275\u0275text"](21, "Bookings"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](22, "li", 4),
                o["\u0275\u0275elementStart"](23, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/device-list");
                }),
                o["\u0275\u0275text"](24, "Devices"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](25, "li", 4),
                o["\u0275\u0275elementStart"](26, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/qremployee-list");
                }),
                o["\u0275\u0275text"](27, "QR Codes"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](28, "li", 4),
                o["\u0275\u0275elementStart"](29, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.redirectTo("taxi/reports");
                }),
                o["\u0275\u0275text"](30, "Reports"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](31, "li", 6),
                o["\u0275\u0275elementStart"](32, "a", 7),
                o["\u0275\u0275text"](33, "Sign Out"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](34, "div", 8),
                o["\u0275\u0275elementStart"](35, "div", 9),
                o["\u0275\u0275elementStart"](36, "div", 10),
                o["\u0275\u0275elementStart"](37, "div", 11),
                o["\u0275\u0275text"](38, "Are you sure you want to Logout?"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](39, "div", 12),
                o["\u0275\u0275elementStart"](40, "button", 13),
                o["\u0275\u0275text"](41, " No "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](42, "button", 14),
                o["\u0275\u0275listener"]("click", function () {
                  return t.logout();
                }),
                o["\u0275\u0275text"](43, " Yes "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction2"](19, c, t.tbody, t.tbody)
                  ),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](22, m)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](23, p)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](24, u)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](25, g)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](26, h)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](27, f)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](28, v)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](29, S)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("routerLink", "javascript:;")(
                    "routerLink",
                    o["\u0275\u0275pureFunction0"](30, x)
                  ));
            },
            directives: [a.m, r.d, r.c],
            styles: [
              ".copyright[_ngcontent-%COMP%]{position:absolute;bottom:0}li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-top:2px}",
            ],
          })),
          e
        );
      })();
      var y = n("oOf3"),
        E = n("cZdB");
      function w(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "p", 33),
          o["\u0275\u0275text"](1, "No Venue added yet."),
          o["\u0275\u0275elementEnd"]());
      }
      function C(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "td", 53),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.hotel_category_id.name,
              " "
            );
        }
      }
      function _(e, t) {
        1 & e && o["\u0275\u0275element"](0, "td", 53);
      }
      function I(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "td", 54),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.address +
                " " +
                e.address_2 +
                " " +
                e.postal_code +
                " " +
                e.area +
                " " +
                e.country_name,
              " "
            );
        }
      }
      function k(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "td", 54),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.address +
                " " +
                e.postal_code +
                " " +
                e.area +
                " " +
                e.country_name,
              " "
            );
        }
      }
      const D = function () {
          return ["/taxi/booking-list/"];
        },
        M = function (e) {
          return { id: e };
        },
        P = function (e) {
          return [e];
        };
      function T(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275elementStart"](1, "td", 41),
            o["\u0275\u0275text"](2),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](3, C, 2, 1, "td", 42),
            o["\u0275\u0275template"](4, _, 1, 0, "td", 42),
            o["\u0275\u0275template"](5, I, 2, 1, "td", 43),
            o["\u0275\u0275template"](6, k, 2, 1, "td", 43),
            o["\u0275\u0275elementStart"](7, "td", 41),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "td", 41),
            o["\u0275\u0275text"](10),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "td", 44),
            o["\u0275\u0275text"](12),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "td", 41),
            o["\u0275\u0275text"](14),
            o["\u0275\u0275pipe"](15, "date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "td", 41),
            o["\u0275\u0275text"](17),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "td", 45),
            o["\u0275\u0275elementStart"](19, "div", 46),
            o["\u0275\u0275elementStart"](20, "button", 47),
            o["\u0275\u0275element"](21, "i", 48),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "div", 49),
            o["\u0275\u0275elementStart"](23, "a", 50),
            o["\u0275\u0275text"](24, "Bookings"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](25, "a", 51),
            o["\u0275\u0275text"](26, "Edit"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](27, "input", 52),
            o["\u0275\u0275listener"]("click", function () {
              o["\u0275\u0275restoreView"](e);
              const n = t.$implicit;
              return o["\u0275\u0275nextContext"](3).saveid(n._id);
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.name, " "),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.hotel_category_id),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.hotel_category_id),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.address_2),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.address_2),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.adname, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.phone, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.email, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              o["\u0275\u0275pipeBind2"](15, 13, e.created_at, "dd/MM/yyyy"),
              " "
            ),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](" ", e.note, " "),
            o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"](
              "routerLink",
              o["\u0275\u0275pureFunction0"](16, D)
            )("queryParams", o["\u0275\u0275pureFunction1"](17, M, e._id)),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275property"](
              "routerLink",
              o["\u0275\u0275pureFunction1"](19, P, "/taxi/hotel-add/" + e._id)
            );
        }
      }
      const O = function (e) {
          return { "max-height": e };
        },
        V = function (e) {
          return { itemsPerPage: 10, currentPage: e };
        };
      function F(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "table", 36),
            o["\u0275\u0275elementStart"](1, "thead"),
            o["\u0275\u0275elementStart"](2, "tr"),
            o["\u0275\u0275elementStart"](3, "th", 37),
            o["\u0275\u0275text"](4, "Venue Name"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "th", 38),
            o["\u0275\u0275text"](6, "Venue Category"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "th", 39),
            o["\u0275\u0275text"](8, "Venue Address"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "th", 37),
            o["\u0275\u0275text"](10, "Contact Person "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "th", 37),
            o["\u0275\u0275text"](12, "Mobile Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "th", 39),
            o["\u0275\u0275text"](14, "Email Address "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "th", 37),
            o["\u0275\u0275text"](16, "Created"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](17, "th", 37),
            o["\u0275\u0275text"](18, "Notes "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](19, "th", 37),
            o["\u0275\u0275text"](20, "Operation"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](21, "tbody"),
            o["\u0275\u0275template"](22, T, 28, 21, "tr", 40),
            o["\u0275\u0275pipe"](23, "paginate"),
            o["\u0275\u0275pipe"](24, "filter"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275property"](
            "ngStyle",
            o["\u0275\u0275pureFunction1"](8, O, e.tbody)
          ),
            o["\u0275\u0275advance"](22),
            o["\u0275\u0275property"](
              "ngForOf",
              o["\u0275\u0275pipeBind2"](
                23,
                2,
                o["\u0275\u0275pipeBind2"](24, 5, e.items, e.searchText),
                o["\u0275\u0275pureFunction1"](10, V, e.p)
              )
            );
        }
      }
      function L(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 34),
            o["\u0275\u0275template"](1, F, 25, 12, "table", 35),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.loader);
        }
      }
      function N(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "pagination-controls", 55),
            o["\u0275\u0275listener"]("pageChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().p = t)
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      let A = (() => {
        class e {
          constructor(e, t, n, a, r) {
            (this.taxiservice = e),
              (this.commonService = t),
              (this.router = n),
              (this.activatedRoute = a),
              (this.propertiesService = r),
              (this.p = 1),
              (this.nodata = !1);
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.tbody),
              this.gethotellist(),
              (this.loader = !0);
          }
          gethotellist() {
            this.taxiservice.gethotellist().subscribe(
              (e) => {
                (this.items = e.data),
                  console.log(this.items),
                  (this.loader = !1);
              },
              (e) => {
                (this.nodata = !0), (this.loader = !1);
              }
            );
          }
          deltedata() {
            this.taxiservice.deleteHotelbyadmin(this.deleteid).subscribe(
              (e) => {
                (this.loader = !1),
                  this.commonService.toast(
                    e.message,
                    !0 === e.success ? "Success" : "Error"
                  ),
                  this.gethotellist();
              },
              (e) => {
                (this.loader = !1),
                  this.commonService.toast(e.error.message, "Error");
              }
            );
          }
          saveid(e) {
            console.log(e), (this.deleteid = e);
          }
          routeToTakiPage() {
            this.router.navigate(["taxi/hotel-add"]);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-hotel-list"]],
            decls: 41,
            vars: 4,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-5", "offset-1"],
              [1, "col-wrapper", "mt-4", "mb-4"],
              [1, "col-md-3"],
              [1, "col-wrapper", "mt-4", "mb-4", "text-right"],
              [1, "btn", "btn-primary", 3, "click"],
              [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
              [1, "search-wrapper"],
              ["action", "", "method", "GET"],
              [1, "input-group"],
              [1, "input-group-text"],
              [1, "fa", "fa-search"],
              [
                "type",
                "text",
                "id",
                "query",
                "name",
                "query",
                "placeholder",
                "Search",
                1,
                "form-control",
                "form-control-search",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-lg-2", "col-md-3"],
              [1, "col-lg-10", "col-md-9", 2, "background-color", "white"],
              [1, "main-content-wrapper"],
              ["class", "lead", 4, "ngIf"],
              ["class", "table-responsive", 4, "ngIf"],
              [1, "card-footer"],
              [1, "text-center"],
              [
                "previousLabel",
                "",
                "nextLabel",
                "",
                3,
                "pageChange",
                4,
                "ngIf",
              ],
              [
                "id",
                "confirmdelete",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "confirmdeleteLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog"],
              [1, "modal-content"],
              [1, "modal-body"],
              [1, "modal-footer"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-secondary",
              ],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-primary",
                3,
                "click",
              ],
              [1, "lead"],
              [1, "table-responsive"],
              ["class", "table", 3, "ngStyle", 4, "ngIf"],
              [1, "table", 3, "ngStyle"],
              ["scope", "col", 2, "min-width", "140px !important"],
              ["scope", "col", 2, "min-width", "120px !important"],
              ["scope", "col", 2, "min-width", "310px !important"],
              [4, "ngFor", "ngForOf"],
              [2, "min-width", "140px"],
              ["style", "min-width: 120px", 4, "ngIf"],
              ["style", "width: 310px", 4, "ngIf"],
              [2, "min-width", "310px"],
              [2, "min-width", "140px", "text-align", "center"],
              [1, "btn-group"],
              [
                "type",
                "button",
                "data-toggle",
                "dropdown",
                "aria-haspopup",
                "true",
                "aria-expanded",
                "false",
                1,
                "btn",
                "btn-primary",
                "my-btn-primary",
                "dropdown-toggle",
              ],
              [1, "fas", "fa-ellipsis-v", "my-i"],
              [1, "dropdown-menu", "menu-div"],
              [
                1,
                "btn",
                "btn-primary",
                "my-btn",
                "mb-1",
                3,
                "routerLink",
                "queryParams",
              ],
              [1, "btn", "btn-primary", "my-btn", "mb-1", 3, "routerLink"],
              [
                "type",
                "button",
                "name",
                "delete",
                "data-target",
                "#confirmdelete",
                "value",
                "Delete",
                "data-toggle",
                "modal",
                1,
                "btn-primary",
                "my-btn",
                2,
                "height",
                "32px",
                "margin-bottom",
                "0px",
                3,
                "click",
              ],
              [2, "min-width", "120px"],
              [2, "width", "310px"],
              ["previousLabel", "", "nextLabel", "", 3, "pageChange"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "div", 5),
                o["\u0275\u0275elementStart"](6, "h2"),
                o["\u0275\u0275text"](7, "Venues"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 6),
                o["\u0275\u0275elementStart"](9, "div", 7),
                o["\u0275\u0275elementStart"](10, "a", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.routeToTakiPage();
                }),
                o["\u0275\u0275text"](11, "Set-Up Venue Account"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](12, "div", 6),
                o["\u0275\u0275elementStart"](13, "div", 9),
                o["\u0275\u0275elementStart"](14, "div", 10),
                o["\u0275\u0275elementStart"](15, "form", 11),
                o["\u0275\u0275elementStart"](16, "div", 12),
                o["\u0275\u0275elementStart"](17, "div", 13),
                o["\u0275\u0275element"](18, "i", 14),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](19, "input", 15),
                o["\u0275\u0275listener"]("ngModelChange", function (e) {
                  return (t.searchText = e);
                }),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](20, "div", 16),
                o["\u0275\u0275elementStart"](21, "div", 17),
                o["\u0275\u0275elementStart"](22, "div", 18),
                o["\u0275\u0275element"](23, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](24, "div", 19),
                o["\u0275\u0275elementStart"](25, "div", 20),
                o["\u0275\u0275template"](26, w, 2, 0, "p", 21),
                o["\u0275\u0275template"](27, L, 2, 1, "div", 22),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](28, "div", 23),
                o["\u0275\u0275elementStart"](29, "div", 24),
                o["\u0275\u0275template"](
                  30,
                  N,
                  1,
                  0,
                  "pagination-controls",
                  25
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](31, "div", 26),
                o["\u0275\u0275elementStart"](32, "div", 27),
                o["\u0275\u0275elementStart"](33, "div", 28),
                o["\u0275\u0275elementStart"](34, "div", 29),
                o["\u0275\u0275text"](
                  35,
                  "Are you sure you want to delete this?"
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](36, "div", 30),
                o["\u0275\u0275elementStart"](37, "button", 31),
                o["\u0275\u0275text"](38, " No "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](39, "button", 32),
                o["\u0275\u0275listener"]("click", function () {
                  return t.deltedata();
                }),
                o["\u0275\u0275text"](40, " Yes "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](19),
                  o["\u0275\u0275property"]("ngModel", t.searchText),
                  o["\u0275\u0275advance"](7),
                  o["\u0275\u0275property"]("ngIf", t.nodata),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.nodata),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("ngIf", !t.nodata));
            },
            directives: [
              s.x,
              s.o,
              s.p,
              s.b,
              s.n,
              s.q,
              b,
              a.l,
              a.m,
              a.k,
              r.d,
              y.c,
            ],
            pipes: [y.b, E.a, a.d],
            styles: [".zia[_ngcontent-%COMP%]{overflow-y:auto}"],
          })),
          e
        );
      })();
      var q = n("BfO1"),
        j = n.n(q),
        R = n("7itd");
      function B(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "h3"),
          o["\u0275\u0275text"](1, "Set-Up Venue Account"),
          o["\u0275\u0275elementEnd"]());
      }
      function Y(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "h3"),
          o["\u0275\u0275text"](1, "Set-Up Venue Account"),
          o["\u0275\u0275elementEnd"]());
      }
      function H(e, t) {
        1 & e && o["\u0275\u0275element"](0, "img", 23);
      }
      function z(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 48),
          o["\u0275\u0275text"](1, " Venue Name is required "),
          o["\u0275\u0275elementEnd"]());
      }
      function Q(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "option", 49),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit;
          o["\u0275\u0275property"]("value", e._id),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](" ", e.name, " ");
        }
      }
      function U(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div"),
          o["\u0275\u0275text"](1, " Category is required "),
          o["\u0275\u0275elementEnd"]());
      }
      function G(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 48),
            o["\u0275\u0275template"](1, U, 2, 0, "div", 8),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.f.hotel_category_id.errors.required
            );
        }
      }
      function K(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 48),
          o["\u0275\u0275text"](1, " Please Enter Your Address "),
          o["\u0275\u0275elementEnd"]());
      }
      function W(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 48),
          o["\u0275\u0275text"](1, " Please Enter Post Code. "),
          o["\u0275\u0275elementEnd"]());
      }
      function J(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 48),
          o["\u0275\u0275text"](1, " Please Enter State. "),
          o["\u0275\u0275elementEnd"]());
      }
      function X(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 48),
          o["\u0275\u0275text"](1, " Please Enter Country. "),
          o["\u0275\u0275elementEnd"]());
      }
      function Z(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 48),
          o["\u0275\u0275text"](1, " Please Enter Contact Person Name. "),
          o["\u0275\u0275elementEnd"]());
      }
      function ee(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 50),
          o["\u0275\u0275text"](1, " Please Enter Mobile Number. "),
          o["\u0275\u0275elementEnd"]());
      }
      function te(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 50),
          o["\u0275\u0275text"](1, " Mobile Number is incorrect. "),
          o["\u0275\u0275elementEnd"]());
      }
      function ne(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 48),
          o["\u0275\u0275text"](1, " Please EnterEmail Address. "),
          o["\u0275\u0275elementEnd"]());
      }
      function ae(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "button", 51),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).createhotel()
              );
            }),
            o["\u0275\u0275text"](1, " Confirm "),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function re(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "button", 51),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).updatehotel()
              );
            }),
            o["\u0275\u0275text"](1, " Confirm "),
            o["\u0275\u0275elementEnd"]();
        }
      }
      const oe = function (e) {
        return { "is-invalid": e };
      };
      function ie(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 24),
            o["\u0275\u0275elementStart"](1, "div", 10),
            o["\u0275\u0275elementStart"](2, "div", 25),
            o["\u0275\u0275elementStart"](3, "div", 26),
            o["\u0275\u0275elementStart"](4, "label", 27),
            o["\u0275\u0275text"](5, "Venue Name"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](6, "input", 28),
            o["\u0275\u0275template"](7, z, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](8, "div", 26),
            o["\u0275\u0275elementStart"](9, "label", 27),
            o["\u0275\u0275text"](10, "Category"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "select", 30),
            o["\u0275\u0275elementStart"](12, "option", 31),
            o["\u0275\u0275text"](13, " Please select Category "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](14, Q, 2, 2, "option", 32),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](15, G, 2, 1, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "div", 26),
            o["\u0275\u0275elementStart"](17, "label", 27),
            o["\u0275\u0275text"](18, "Address"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](19, "input", 33, 34),
            o["\u0275\u0275listener"]("onAddressChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().handleAddressChange(t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](21, K, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "div", 26),
            o["\u0275\u0275elementStart"](23, "label", 27),
            o["\u0275\u0275text"](24, " Address 2 (Optional)"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](25, "input", 35),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](26, "div", 10),
            o["\u0275\u0275elementStart"](27, "div", 36),
            o["\u0275\u0275elementStart"](28, "div", 26),
            o["\u0275\u0275elementStart"](29, "label", 27),
            o["\u0275\u0275text"](30, "Post Code"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](31, "input", 37),
            o["\u0275\u0275template"](32, W, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](33, "div", 36),
            o["\u0275\u0275elementStart"](34, "div", 26),
            o["\u0275\u0275elementStart"](35, "label", 27),
            o["\u0275\u0275text"](36, "State"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](37, "input", 38),
            o["\u0275\u0275template"](38, J, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](39, "div", 10),
            o["\u0275\u0275elementStart"](40, "div", 36),
            o["\u0275\u0275elementStart"](41, "div", 26),
            o["\u0275\u0275elementStart"](42, "label", 27),
            o["\u0275\u0275text"](43, "Country"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](44, "input", 39),
            o["\u0275\u0275template"](45, X, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](46, "div", 26),
            o["\u0275\u0275elementStart"](47, "label", 27),
            o["\u0275\u0275text"](48, " Contact Person"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](49, "input", 40),
            o["\u0275\u0275template"](50, Z, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](51, "div", 26),
            o["\u0275\u0275elementStart"](52, "label", 27),
            o["\u0275\u0275text"](53, "Mobile Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](54, "input", 41),
            o["\u0275\u0275template"](55, ee, 2, 0, "div", 42),
            o["\u0275\u0275template"](56, te, 2, 0, "div", 42),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](57, "div", 26),
            o["\u0275\u0275elementStart"](58, "label", 27),
            o["\u0275\u0275text"](59, "Email Address"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](60, "input", 43),
            o["\u0275\u0275template"](61, ne, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](62, "div", 26),
            o["\u0275\u0275elementStart"](63, "label", 27),
            o["\u0275\u0275text"](64, "Note (Optional)"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](65, "textarea", 44),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](66, "div", 10),
            o["\u0275\u0275elementStart"](67, "div", 45),
            o["\u0275\u0275elementStart"](68, "button", 46),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().onClear()
              );
            }),
            o["\u0275\u0275text"](69, " Cancel "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](70, ae, 2, 0, "button", 47),
            o["\u0275\u0275template"](71, re, 2, 0, "button", 47),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                23,
                oe,
                e.submitted && e.f.name.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.name.errors),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                25,
                oe,
                e.submitted && e.f.hotel_category_id.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngValue", null),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275property"]("ngForOf", e.category),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.hotel_category_id.errors
            ),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                27,
                oe,
                e.submitted && e.f.address.errors
              )
            ),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.address.errors
            ),
            o["\u0275\u0275advance"](10),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                29,
                oe,
                e.submitted && e.f.postcode.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.postcode.errors
            ),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                31,
                oe,
                e.submitted && e.f.state.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.state.errors),
            o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                33,
                oe,
                e.submitted && e.f.country.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.country.errors
            ),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                35,
                oe,
                e.submitted && e.f.adname.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.adname.errors),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                37,
                oe,
                e.submitted && e.f.phone.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && !e.f.phone.value),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.phone.value && e.f.phone.errors
            ),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                39,
                oe,
                e.submitted && e.f.email.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.email.errors),
            o["\u0275\u0275advance"](9),
            o["\u0275\u0275property"]("ngIf", e.editId),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.editId);
        }
      }
      const le = function (e) {
        return { "max-height": e };
      };
      let de = (() => {
        class e {
          constructor(e, t, n, a, r, o) {
            (this.taxiservice = e),
              (this.commonService = t),
              (this.router = n),
              (this.location = a),
              (this.activatedRoute = r),
              (this.propertiesService = o),
              (this.dropVal = null),
              (this.editId = !0),
              (this._id = ""),
              (this.area = "");
          }
          ngAfterViewInit() {
            if (!this._id) {
              const e = document.querySelector("#phone");
              this.obj = j()(e, { initialCountry: "au" });
            }
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.createLength),
              this.getCategoriesList(),
              (this.addHotelForm = new s.g({
                name: new s.d(this.name, [s.w.required]),
                hotel_category_id: new s.d(null, [s.w.required]),
                adname: new s.d(this.adname, [s.w.required]),
                email: new s.d(this.email, [
                  s.w.required,
                  s.w.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                ]),
                phone: new s.d(this.phone, [
                  s.w.required,
                  s.w.minLength(9),
                  s.w.maxLength(12),
                  s.w.pattern("^[0-9]*$"),
                ]),
                address: new s.d(this.name, [s.w.required]),
                address1: new s.d(this.state),
                area: new s.d(this.area),
                lat: new s.d(this.lat),
                long: new s.d(this.long),
                state: new s.d(this.state, [s.w.required]),
                street: new s.d(this.street),
                postcode: new s.d(this.state, [s.w.required]),
                country: new s.d(this.state, [s.w.required]),
                streetPrefix: new s.d(this.streetPrefix),
                note: new s.d(this.note),
              })),
              (this._id = this.activatedRoute.snapshot.params.id),
              null != this._id && this.gethoteldatabyid(this._id),
              setTimeout(() => {
                document.querySelector('[href="/taxi/hotel-list"]').className =
                  "nav-link active";
              }, 10);
          }
          gethoteldatabyid(e) {
            this.taxiservice.gethoteldatabyid(e).subscribe((e) => {
              const t = e.data[0];
              (this.editId = !1), console.log(t), this.patchData(t);
            });
          }
          patchData(e) {
            this.addHotelForm.patchValue({
              name: e.name,
              email: e.email,
              adname: e.adname,
              phone: e.phone,
              address: e.address,
              lat: e.lat,
              long: e.long,
              note: e.note,
              state: e.state,
              street: e.street,
              streetPrefix: e.streetPrefix,
              area: e.area,
              postcode: e.postal_code,
              country: e.country_name,
              address1: e.address_2,
              hotel_category_id: e.hotel_category_id._id,
            }),
              (this.postcode = e.postal_code),
              (this.country = e.country_name),
              (this.state = e.state),
              (this.googleLat = e.location.coordinates[0]),
              (this.googleLng = e.location.coordinates[1]);
            const t = document.querySelector("#phone");
            this.obj = j()(t, { initialCountry: e.country_iso2_mobile });
          }
          get f() {
            return this.addHotelForm.controls;
          }
          back() {
            this.location.back();
          }
          updatehotel() {
            var e = this.obj.getSelectedCountryData();
            this.submitted = !0;
            const t = this.addHotelForm.controls;
            if (this.addHotelForm.invalid) console.log("Invalid form");
            else if (this.googleLat && this.googleLng) {
              const n = {
                name: t.name.value,
                adname: t.adname.value,
                email: t.email.value,
                address: t.address.value,
                phone: t.phone.value,
                note: t.note.value,
                lat: this.googleLat,
                long: this.googleLng,
                state: t.state.value,
                street: this.street,
                streetPrefix: this.streetPrefix,
                area: this.area,
                country_code: e.dialCode,
                country_iso2_mobile: e.iso2,
                postal_code: t.postcode.value,
                country_name: t.country.value,
                address_2: t.address1.value,
                hotel_category_id: t.hotel_category_id.value,
              };
              (this.loader = !0),
                this.taxiservice.updatehotel(this._id, n).subscribe(
                  (e) => {
                    this.router.navigate(["/taxi/hotel-list"]),
                      this.commonService.toast(
                        "Hotel Details updated Successfully",
                        "Success"
                      );
                  },
                  (e) => {
                    (this.loader = !1),
                      this.commonService.toast(e.error.message, "Error");
                  }
                );
            } else
              this.commonService.toast(
                "The address you entered is not correct. Please add a proper address (choose from the suggested address)",
                "Error"
              );
          }
          createhotel() {
            var e = this.obj.getSelectedCountryData();
            this.submitted = !0;
            const t = this.addHotelForm.controls;
            if (this.addHotelForm.invalid) console.log("Invalid form");
            else if (this.googleLat && this.googleLng) {
              const n = {
                name: t.name.value,
                adname: t.adname.value,
                email: t.email.value,
                address: t.address.value,
                phone: t.phone.value,
                note: t.note.value,
                lat: this.googleLat,
                long: this.googleLng,
                state: t.state.value,
                street: this.street,
                streetPrefix: this.streetPrefix,
                area: this.area,
                country_code: e.dialCode,
                country_iso2_mobile: e.iso2,
                postal_code: t.postcode.value,
                country_name: t.country.value,
                address_2: t.address1.value,
                hotel_category_id: t.hotel_category_id.value,
              };
              (this.loader = !0),
                this.taxiservice.createhotel(n).subscribe(
                  (e) => {
                    this.router.navigate(["/taxi/hotel-list"]),
                      this.commonService.toast(
                        "Hotel added Successfully",
                        "Success"
                      );
                  },
                  (e) => {
                    (this.loader = !1),
                      this.commonService.toast(e.error.message, "Error");
                  }
                );
            } else
              this.commonService.toast(
                "The address you entered is not correct. Please add a proper address (choose from the suggested address)",
                "Error"
              );
          }
          handleAddressChange(e) {
            console.log(e),
              (this.googleaddress = e.name),
              (this.googleLat = e.geometry.location.lat()),
              (this.googleLng = e.geometry.location.lng()),
              console.log(e.geometry.location.lat()),
              e.address_components.forEach((e) => {
                e.types.forEach((t) => {
                  "street_number" == t &&
                    (console.log(e.long_name),
                    (this.streetPrefix = e.long_name)),
                    ("route" != t && "street" != t) ||
                      (console.log(e.long_name), (this.street = e.long_name)),
                    "locality" == t &&
                      (console.log(e.long_name), (this.area = e.long_name)),
                    "administrative_area_level_1" == t &&
                      (console.log(e.long_name), (this.state = e.long_name)),
                    "postal_code" == t &&
                      (console.log(e.long_name), (this.postcode = e.long_name)),
                    "country" == t &&
                      (console.log(e.long_name), (this.country = e.long_name));
                });
              }),
              this.addHotelForm.patchValue({
                address: this.googleaddress,
                postcode: this.postcode,
                state: this.state,
                country: this.country,
              });
          }
          onClear() {
            this.router.navigate(["taxi/hotel-list"]);
          }
          getCategoriesList() {
            this.taxiservice.getCategoriesList().subscribe(
              (e) => {
                this.category = e.data;
              },
              (e) => {}
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](a.h),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-hotel-add"]],
            decls: 27,
            vars: 8,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "height",
                "75px",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row", "mt-4"],
              [1, "col-md-2", "mb-2", "pt-2"],
              ["href", "javascript:;", 1, "back-button", 3, "click"],
              [1, "fa", "fa-arrow-left"],
              [1, "col-md-8", "mb-2"],
              [4, "ngIf"],
              [1, "container-z", 2, "margin-top", "100px"],
              [1, "row"],
              [1, "col-md-2"],
              [
                1,
                "col-md-10",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "main-content-wrapper"],
              [1, "container-fluid", "mt--7"],
              [1, "col-xl-12", "order-xl-1"],
              [1, "card-header", "bg-white", "border-0"],
              [1, "row", "align-items-center"],
              [1, "col-8"],
              [1, "card-body"],
              ["role", "form", "method", "POST", 3, "formGroup"],
              ["src", "./assets/img/ripple.gif", 4, "ngIf"],
              ["class", "pl-lg-4", 4, "ngIf"],
              ["src", "./assets/img/ripple.gif"],
              [1, "pl-lg-4"],
              [1, "col-md-7", "offset-2"],
              [1, "form-group"],
              [1, "form-control-label"],
              [
                "type",
                "text",
                "formControlName",
                "name",
                "placeholder",
                "Enter Company Name",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              ["class", "invalid-feedback", 4, "ngIf"],
              [
                "id",
                "inputState",
                "formControlName",
                "hotel_category_id",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              ["selected", "", 3, "ngValue"],
              [3, "value", 4, "ngFor", "ngForOf"],
              [
                "type",
                "text",
                "ngx-google-places-autocomplete",
                "",
                "formControlName",
                "address",
                "placeholder",
                "",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
                "onAddressChange",
              ],
              ["placesRef", "ngx-places"],
              [
                "type",
                "text",
                "formControlName",
                "address1",
                "placeholder",
                "",
                1,
                "form-control",
                "form-control-alternative",
              ],
              [1, "col"],
              [
                "type",
                "text",
                "formControlName",
                "postcode",
                "placeholder",
                "",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [
                "type",
                "text",
                "formControlName",
                "state",
                "placeholder",
                "",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [
                "type",
                "text",
                "formControlName",
                "country",
                "placeholder",
                "",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [
                "type",
                "text",
                "formControlName",
                "adname",
                "placeholder",
                "Enter  Contact Person's  Name",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [
                "id",
                "phone",
                "type",
                "tel",
                "formControlName",
                "phone",
                "maxlength",
                "12",
                "placeholder",
                "Enter Your Mobile Number",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                "m-w",
                3,
                "ngClass",
              ],
              [
                "class",
                "invalid-feedback",
                "style",
                "display: block;",
                4,
                "ngIf",
              ],
              [
                "type",
                "text",
                "formControlName",
                "email",
                "placeholder",
                "Enter Company's Email Address",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [
                "formControlName",
                "note",
                "placeholder",
                "Enter Note",
                "id",
                "note",
                "rows",
                "3",
                1,
                "form-control",
                "form-control-alternative",
              ],
              [1, "col-md-12", "text-center"],
              [
                "type",
                "button",
                1,
                "btn",
                "btn-outline-dark",
                "mr-3",
                3,
                "click",
              ],
              [
                "type",
                "submit",
                "class",
                "btn btn-primary",
                3,
                "click",
                4,
                "ngIf",
              ],
              [1, "invalid-feedback"],
              [3, "value"],
              [1, "invalid-feedback", 2, "display", "block"],
              ["type", "submit", 1, "btn", "btn-primary", 3, "click"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.back();
                }),
                o["\u0275\u0275element"](6, "i", 6),
                o["\u0275\u0275text"](7, " Back "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 7),
                o["\u0275\u0275template"](9, B, 2, 0, "h3", 8),
                o["\u0275\u0275template"](10, Y, 2, 0, "h3", 8),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](11, "div", 9),
                o["\u0275\u0275elementStart"](12, "div", 10),
                o["\u0275\u0275elementStart"](13, "div", 11),
                o["\u0275\u0275element"](14, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](15, "div", 12),
                o["\u0275\u0275elementStart"](16, "div", 13),
                o["\u0275\u0275elementStart"](17, "div", 14),
                o["\u0275\u0275elementStart"](18, "div", 10),
                o["\u0275\u0275elementStart"](19, "div", 15),
                o["\u0275\u0275elementStart"](20, "div", 16),
                o["\u0275\u0275elementStart"](21, "div", 17),
                o["\u0275\u0275element"](22, "div", 18),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](23, "div", 19),
                o["\u0275\u0275elementStart"](24, "form", 20),
                o["\u0275\u0275template"](25, H, 1, 0, "img", 21),
                o["\u0275\u0275template"](26, ie, 72, 41, "div", 22),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](9),
                  o["\u0275\u0275property"]("ngIf", t.editId),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.editId),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](6, le, t.tbody)
                  ),
                  o["\u0275\u0275advance"](9),
                  o["\u0275\u0275property"]("formGroup", t.addHotelForm),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", t.loader),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.loader));
            },
            directives: [
              a.l,
              b,
              a.m,
              s.x,
              s.o,
              s.h,
              s.b,
              s.n,
              s.f,
              s.u,
              a.j,
              s.v,
              s.r,
              s.y,
              a.k,
              R.GooglePlaceDirective,
              s.j,
            ],
            styles: [
              ".table-fixed[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{width:150%}.table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{height:230px;overflow:auto;width:150%}.table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table-fixed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-fixed[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-fixed[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .table-fixed[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:block}.table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-fixed[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{float:left;border-bottom-width:0}",
            ],
          })),
          e
        );
      })();
      function se(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "td", 39),
          o["\u0275\u0275text"](1, " TAXI "),
          o["\u0275\u0275elementEnd"]());
      }
      function ce(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "td", 40),
          o["\u0275\u0275text"](1, " MAXI "),
          o["\u0275\u0275elementEnd"]());
      }
      function me(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div"),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](" ", e.hotel_id.name, " ");
        }
      }
      function pe(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div"),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](" ", e.hotel_id.address, " ");
        }
      }
      function ue(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275elementStart"](1, "td", 34),
            o["\u0275\u0275text"](2),
            o["\u0275\u0275pipe"](3, "date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](4, "td"),
            o["\u0275\u0275text"](5),
            o["\u0275\u0275pipe"](6, "date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "td", 34),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](9, se, 2, 0, "td", 35),
            o["\u0275\u0275template"](10, ce, 2, 0, "td", 36),
            o["\u0275\u0275elementStart"](11, "td", 34),
            o["\u0275\u0275template"](12, me, 2, 1, "div", 37),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "td", 38),
            o["\u0275\u0275template"](14, pe, 2, 1, "div", 37),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "td", 34),
            o["\u0275\u0275text"](16),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](17, "td", 34),
            o["\u0275\u0275text"](18),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              o["\u0275\u0275pipeBind2"](3, 9, e.created_at, "dd/MM/yyyy"),
              " "
            ),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              o["\u0275\u0275pipeBind2"](6, 12, e.created_at, "HH:mm"),
              " "
            ),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              1 == e.booking_status
                ? "Pending"
                : 2 == e.booking_status
                ? "Completed"
                : 3 == e.booking_status
                ? "Cancelled"
                : 4 == e.booking_status
                ? "In Progress"
                : "",
              " "
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 1 == e.taxi_type),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 2 == e.taxi_type),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275property"]("ngIf", e.hotel_id),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275property"]("ngIf", e.hotel_id),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate"](e.location_name),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.booking_id, " ");
        }
      }
      function ge(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "pagination-controls", 41),
            o["\u0275\u0275listener"]("pageChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().p = t)
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      const he = function (e) {
          return { "max-height": e };
        },
        fe = function (e) {
          return { itemsPerPage: 10, currentPage: e };
        };
      let ve = (() => {
        class e {
          constructor(e, t, n, a) {
            (this.taxiservice = e),
              (this.activatedRoute = t),
              (this.propertiesService = n),
              (this.commonService = a),
              (this.p = 1),
              (this.nodata = !1),
              (this.taxiId = !0),
              (this._id = "");
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.tbody),
              this.activatedRoute.queryParams.subscribe((e) => {
                this._id = e.id;
              }),
              console.log("taxi id"),
              console.log(localStorage.getItem("userId"));
            var e = localStorage.getItem("userId");
            this._id
              ? this.getbookinglistByHotelId(1, e, this._id)
              : this.getbookinglist(1, e);
          }
          getbookinglist(e, t) {
            this.taxiservice.getbookingList(e, t).subscribe(
              (e) => {
                (this.items = e.data),
                  (this.loader = !1),
                  console.log("ressss", this.items);
              },
              (e) => {
                (this.nodata = !0), (this.loader = !1);
              }
            );
          }
          getbookinglistByHotelId(e, t, n) {
            this.taxiservice.getbookingListByHotelId(e, t, n).subscribe(
              (e) => {
                (this.items = e.data.docs),
                  (this.loader = !1),
                  console.log("ressss", this.items);
              },
              (e) => {
                (this.nodata = !0), (this.loader = !1);
              }
            );
          }
          deltedata() {
            this.taxiservice.deletebooking(this.deleteid).subscribe(
              (e) => {
                (this.loader = !1),
                  this.commonService.toast(
                    e.message,
                    !0 === e.success ? "Success" : "Error"
                  ),
                  this.getbookinglist(1, localStorage.getItem("userId"));
              },
              (e) => {
                (this.loader = !1),
                  this.commonService.toast(e.error.message, "Error");
              }
            );
          }
          saveid(e) {
            this.deleteid = e;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a),
              o["\u0275\u0275directiveInject"](l.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-booking-list"]],
            decls: 59,
            vars: 14,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-5", "offset-1"],
              [1, "col-wrapper", "mt-4", "mb-4"],
              [1, "col-md-3"],
              [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
              [1, "search-wrapper"],
              ["action", "", "method", "GET"],
              [1, "input-group"],
              [1, "input-group-text"],
              [1, "fa", "fa-search"],
              [
                "type",
                "text",
                "id",
                "query",
                "name",
                "query",
                "placeholder",
                "Search",
                1,
                "form-control",
                "form-control-search",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-lg-2", "col-md-3"],
              [
                1,
                "col-lg-10",
                "col-md-9",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "main-content-wrapper"],
              [1, "table-responsive"],
              [1, "table", "table-fixed"],
              ["scope", "col", 2, "min-width", "140px !important"],
              ["scope", "col", 2, "min-width", "310px !important"],
              [4, "ngFor", "ngForOf"],
              [1, "card-footer"],
              [1, "text-center"],
              [
                "previousLabel",
                "",
                "nextLabel",
                "",
                3,
                "pageChange",
                4,
                "ngIf",
              ],
              [
                "id",
                "confirmdelete",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "confirmdeleteLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog"],
              [1, "modal-content"],
              [1, "modal-body"],
              [1, "modal-footer"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-secondary",
              ],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-primary",
                3,
                "click",
              ],
              [2, "min-width", "140px"],
              ["style", "min-width: 140px", "class", "my-heading ", 4, "ngIf"],
              [
                "style",
                "min-width: 140px",
                "style",
                "    color: #40c6fb",
                4,
                "ngIf",
              ],
              [4, "ngIf"],
              [2, "min-width", "310px"],
              [1, "my-heading", 2, "min-width", "140px"],
              [2, "color", "#40c6fb"],
              ["previousLabel", "", "nextLabel", "", 3, "pageChange"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "div", 5),
                o["\u0275\u0275elementStart"](6, "h2"),
                o["\u0275\u0275text"](7, "Bookings"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 6),
                o["\u0275\u0275elementStart"](9, "div", 7),
                o["\u0275\u0275elementStart"](10, "div", 8),
                o["\u0275\u0275elementStart"](11, "form", 9),
                o["\u0275\u0275elementStart"](12, "div", 10),
                o["\u0275\u0275elementStart"](13, "div", 11),
                o["\u0275\u0275element"](14, "i", 12),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](15, "input", 13),
                o["\u0275\u0275listener"]("ngModelChange", function (e) {
                  return (t.searchText = e);
                }),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](16, "div", 14),
                o["\u0275\u0275elementStart"](17, "div", 15),
                o["\u0275\u0275elementStart"](18, "div", 16),
                o["\u0275\u0275element"](19, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](20, "div", 17),
                o["\u0275\u0275elementStart"](21, "div", 18),
                o["\u0275\u0275elementStart"](22, "div", 19),
                o["\u0275\u0275elementStart"](23, "table", 20),
                o["\u0275\u0275elementStart"](24, "thead"),
                o["\u0275\u0275elementStart"](25, "tr"),
                o["\u0275\u0275elementStart"](26, "th", 21),
                o["\u0275\u0275text"](27, "Booking Date"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](28, "th", 21),
                o["\u0275\u0275text"](29, "Booking Time"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](30, "th", 21),
                o["\u0275\u0275text"](31, "Status"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](32, "th", 21),
                o["\u0275\u0275text"](33, "Type"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](34, "th", 21),
                o["\u0275\u0275text"](35, "Venue Name"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](36, "th", 22),
                o["\u0275\u0275text"](37, "Venue Address"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](38, "th", 21),
                o["\u0275\u0275text"](39, "Room #"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](40, "th", 21),
                o["\u0275\u0275text"](41, "Booking ID"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](42, "tbody"),
                o["\u0275\u0275template"](43, ue, 19, 15, "tr", 23),
                o["\u0275\u0275pipe"](44, "paginate"),
                o["\u0275\u0275pipe"](45, "filter"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](46, "div", 24),
                o["\u0275\u0275elementStart"](47, "div", 25),
                o["\u0275\u0275template"](
                  48,
                  ge,
                  1,
                  0,
                  "pagination-controls",
                  26
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](49, "div", 27),
                o["\u0275\u0275elementStart"](50, "div", 28),
                o["\u0275\u0275elementStart"](51, "div", 29),
                o["\u0275\u0275elementStart"](52, "div", 30),
                o["\u0275\u0275text"](
                  53,
                  "Are you sure you want to delete this?"
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](54, "div", 31),
                o["\u0275\u0275elementStart"](55, "button", 32),
                o["\u0275\u0275text"](56, " No "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](57, "button", 33),
                o["\u0275\u0275listener"]("click", function () {
                  return t.deltedata();
                }),
                o["\u0275\u0275text"](58, " Yes "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](15),
                  o["\u0275\u0275property"]("ngModel", t.searchText),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](10, he, t.tbody)
                  ),
                  o["\u0275\u0275advance"](23),
                  o["\u0275\u0275property"](
                    "ngForOf",
                    o["\u0275\u0275pipeBind2"](
                      44,
                      4,
                      o["\u0275\u0275pipeBind2"](45, 7, t.items, t.searchText),
                      o["\u0275\u0275pureFunction1"](12, fe, t.p)
                    )
                  ),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"]("ngIf", !t.nodata));
            },
            directives: [s.x, s.o, s.p, s.b, s.n, s.q, b, a.m, a.k, a.l, y.c],
            pipes: [y.b, E.a, a.d],
            styles: [
              ".my-heading[_ngcontent-%COMP%]{background:-webkit-linear-gradient(#ea950b 51%,#fbc02d);-webkit-background-clip:text;-webkit-text-fill-color:transparent}",
            ],
          })),
          e
        );
      })();
      function Se(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 17),
            o["\u0275\u0275elementStart"](1, "p"),
            o["\u0275\u0275text"](2, "Company Name: "),
            o["\u0275\u0275elementStart"](3, "span"),
            o["\u0275\u0275text"](4),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "p"),
            o["\u0275\u0275text"](6, "ABN/ACN:"),
            o["\u0275\u0275elementStart"](7, "span"),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "p"),
            o["\u0275\u0275text"](10, "Contact Name:"),
            o["\u0275\u0275elementStart"](11, "span"),
            o["\u0275\u0275text"](12),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "p"),
            o["\u0275\u0275text"](14, "Mobile Number:"),
            o["\u0275\u0275elementStart"](15, "span"),
            o["\u0275\u0275text"](16),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](17, "p"),
            o["\u0275\u0275text"](18, "Email:"),
            o["\u0275\u0275elementStart"](19, "span"),
            o["\u0275\u0275text"](20),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](" ", e.items.name, " "),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](" ", e.items.ABN, " "),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](" ", e.items.adname, " "),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](
              " ",
              "+" + e.items.country_code + "-" + e.items.phone,
              " "
            ),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](" ", e.items.email, " ");
        }
      }
      let xe = (() => {
        class e {
          constructor(e, t) {
            (this.taxiservice = e), (this.router = t);
          }
          ngOnInit() {
            (this.loader = !0), this.getinformation();
          }
          getinformation() {
            this.taxiservice.getinformation().subscribe(
              (e) => {
                (this.items = e.data), (this.loader = !1);
              },
              (e) => {
                this.loader = !1;
              }
            );
          }
          routeToInformationPage() {
            this.router.navigate(["taxi/information-add"]);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](r.b)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-information"]],
            decls: 22,
            vars: 1,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-5", "offset-1"],
              [1, "col-wrapper", "mt-4", "mb-4"],
              [1, "col-md-3"],
              [1, "col-wrapper", "mt-4", "mb-4", "text-right"],
              [1, "btn", "btn-primary", 3, "click"],
              [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
              [1, "search-wrapper"],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-md-2"],
              [1, "col-md-10", 2, "background-color", "white"],
              [1, "main-content-wrapper"],
              ["class", "info-wrapper ml-3 mt-3", 4, "ngIf"],
              [1, "info-wrapper", "ml-3", "mt-3"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "div", 5),
                o["\u0275\u0275elementStart"](6, "h2"),
                o["\u0275\u0275text"](7, "Information"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 6),
                o["\u0275\u0275elementStart"](9, "div", 7),
                o["\u0275\u0275elementStart"](10, "a", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.routeToInformationPage();
                }),
                o["\u0275\u0275text"](11, "Edit Information"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](12, "div", 6),
                o["\u0275\u0275elementStart"](13, "div", 9),
                o["\u0275\u0275element"](14, "div", 10),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](15, "div", 11),
                o["\u0275\u0275elementStart"](16, "div", 12),
                o["\u0275\u0275elementStart"](17, "div", 13),
                o["\u0275\u0275element"](18, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](19, "div", 14),
                o["\u0275\u0275elementStart"](20, "div", 15),
                o["\u0275\u0275template"](21, Se, 21, 5, "div", 16),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](21),
                  o["\u0275\u0275property"]("ngIf", !t.loader));
            },
            directives: [b, a.l],
            styles: [
              "span[_ngcontent-%COMP%]{background:-webkit-linear-gradient(#5cc6f0,grey);-webkit-background-clip:text}p[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{font-size:25px;-webkit-text-fill-color:transparent}p[_ngcontent-%COMP%]{background:-webkit-linear-gradient(#000,#d3d3d3);-webkit-background-clip:text}",
            ],
          })),
          e
        );
      })();
      var be = n("eQ3z"),
        ye = n("JGsR");
      function Ee(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "p", 31),
          o["\u0275\u0275text"](1, "No Device added yet."),
          o["\u0275\u0275elementEnd"]());
      }
      function we(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "option", 58),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit,
            n = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275property"]("value", e._id)(
            "selected",
            !!n.hotel_id && n.hotel_id._id == e._id
          ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](" ", e.name, " ");
        }
      }
      function Ce(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div"),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate"](e.plain_password);
        }
      }
      function _e(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div"),
          o["\u0275\u0275text"](1, "***********"),
          o["\u0275\u0275elementEnd"]());
      }
      function Ie(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 59);
      }
      function ke(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 60);
      }
      function De(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "a", 61),
            o["\u0275\u0275listener"]("click", function () {
              o["\u0275\u0275restoreView"](e);
              const t = o["\u0275\u0275nextContext"]().$implicit;
              return o["\u0275\u0275nextContext"](3).genrateToken(t._id);
            }),
            o["\u0275\u0275text"](1, "Generate Key"),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function Me(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "a", 61),
            o["\u0275\u0275listener"]("click", function () {
              o["\u0275\u0275restoreView"](e);
              const t = o["\u0275\u0275nextContext"]().$implicit;
              return o["\u0275\u0275nextContext"](3).genrateToken(t._id);
            }),
            o["\u0275\u0275text"](1, "Re-Generate Key"),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function Pe(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275elementStart"](1, "td", 38),
            o["\u0275\u0275text"](2),
            o["\u0275\u0275pipe"](3, "date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](4, "td", 39),
            o["\u0275\u0275elementStart"](5, "div"),
            o["\u0275\u0275elementStart"](6, "select", 40),
            o["\u0275\u0275listener"]("change", function (n) {
              o["\u0275\u0275restoreView"](e);
              const a = t.$implicit;
              return o["\u0275\u0275nextContext"](3).changeHotel(
                a._id,
                a.hotel_id,
                n
              );
            }),
            o["\u0275\u0275elementStart"](7, "option", 41),
            o["\u0275\u0275text"](8, "Assign to Venue"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](9, we, 2, 3, "option", 42),
            o["\u0275\u0275elementStart"](10, "option", 43),
            o["\u0275\u0275text"](11, "Unassign to Venue"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](12, "td", 38),
            o["\u0275\u0275text"](13),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](14, "td", 38),
            o["\u0275\u0275text"](15),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "td", 38),
            o["\u0275\u0275text"](17),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "td", 44),
            o["\u0275\u0275text"](19),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](20, "td", 38),
            o["\u0275\u0275elementStart"](21, "label", 45),
            o["\u0275\u0275elementStart"](22, "input", 46),
            o["\u0275\u0275listener"]("change", function (n) {
              o["\u0275\u0275restoreView"](e);
              const a = t.$implicit;
              return o["\u0275\u0275nextContext"](3).changeStatus(a._id, n);
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](23, "span", 47),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](24, "td", 38),
            o["\u0275\u0275template"](25, Ce, 2, 1, "div", 48),
            o["\u0275\u0275template"](26, _e, 2, 0, "div", 48),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](27, "td", 38),
            o["\u0275\u0275elementStart"](28, "div", 49),
            o["\u0275\u0275elementStart"](29, "button", 50),
            o["\u0275\u0275listener"]("click", function () {
              o["\u0275\u0275restoreView"](e);
              const n = t.$implicit;
              return o["\u0275\u0275nextContext"](3).showPassword(n._id);
            }),
            o["\u0275\u0275template"](30, Ie, 1, 0, "i", 51),
            o["\u0275\u0275template"](31, ke, 1, 0, "i", 52),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](32, "td", 53),
            o["\u0275\u0275elementStart"](33, "div", 49),
            o["\u0275\u0275elementStart"](34, "button", 54),
            o["\u0275\u0275element"](35, "i", 55),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](36, "div", 56),
            o["\u0275\u0275template"](37, De, 2, 0, "a", 57),
            o["\u0275\u0275template"](38, Me, 2, 0, "a", 57),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = t.$implicit,
            n = o["\u0275\u0275nextContext"](3);
          o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              o["\u0275\u0275pipeBind2"](3, 14, e.created_at, "dd/MM/yyyy"),
              " "
            ),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275propertyInterpolate1"]("id", "Venue_", e._id, ""),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("ngForOf", n.hotel),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](" ", e.adname, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.serial_number, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.sim_number, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.positioned_at, " "),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("checked", e.is_active),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("ngIf", e.view),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.view && e.password),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"]("ngIf", !e.view),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.view),
            o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"]("ngIf", !e.password),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.password);
        }
      }
      const Te = function (e) {
          return { "max-height": e };
        },
        Oe = function (e) {
          return { itemsPerPage: 10, currentPage: e };
        };
      function Ve(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "table", 34),
            o["\u0275\u0275elementStart"](1, "thead"),
            o["\u0275\u0275elementStart"](2, "tr"),
            o["\u0275\u0275elementStart"](3, "th", 35),
            o["\u0275\u0275text"](4, "Setup Date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "th", 36),
            o["\u0275\u0275text"](6, "Assigned to Venue"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "th", 35),
            o["\u0275\u0275text"](8, "Contact Person "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "th", 35),
            o["\u0275\u0275text"](10, "Serial Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "th", 35),
            o["\u0275\u0275text"](12, "Sim Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "th", 35),
            o["\u0275\u0275text"](14, "Location"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "th", 35),
            o["\u0275\u0275text"](16, "Status"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](17, "th", 35),
            o["\u0275\u0275text"](18, "Key"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](19, "th", 35),
            o["\u0275\u0275text"](20, "View"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](21, "th", 35),
            o["\u0275\u0275text"](22, "Operation"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](23, "tbody"),
            o["\u0275\u0275template"](24, Pe, 39, 17, "tr", 37),
            o["\u0275\u0275pipe"](25, "paginate"),
            o["\u0275\u0275pipe"](26, "filter"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275property"](
            "ngStyle",
            o["\u0275\u0275pureFunction1"](8, Te, e.tbody)
          ),
            o["\u0275\u0275advance"](24),
            o["\u0275\u0275property"](
              "ngForOf",
              o["\u0275\u0275pipeBind2"](
                25,
                2,
                o["\u0275\u0275pipeBind2"](26, 5, e.items, e.searchText),
                o["\u0275\u0275pureFunction1"](10, Oe, e.p)
              )
            );
        }
      }
      function Fe(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 32),
            o["\u0275\u0275template"](1, Ve, 27, 12, "table", 33),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.loader);
        }
      }
      function Le(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "pagination-controls", 62),
            o["\u0275\u0275listener"]("pageChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().p = t)
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      let Ne = (() => {
        class e {
          constructor(e, t, n, a, r) {
            (this.taxiService = e),
              (this.commonService = t),
              (this.router = n),
              (this.activatedRoute = a),
              (this.propertiesService = r),
              (this.p = 1),
              (this.password = ""),
              (this.encriptedPasswrod = ""),
              (this.nodata = !1);
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.tbody),
              this.gethotelforlist(),
              this.getdevicelist(),
              (this.loader = !0);
          }
          changeStatus(e, t) {
            const n = t.target.checked;
            console.log(status),
              this.taxiService
                .updatedevicestatus(e, { is_active: n })
                .subscribe(
                  (e) => {
                    this.commonService.toast(
                      "Status updated Successfully",
                      "Success"
                    ),
                      this.getdevicelist();
                  },
                  (e) => {
                    this.commonService.toast(e.error.message, "Error");
                  }
                );
          }
          gethotelforlist() {
            this.taxiService.gethotellist().subscribe(
              (e) => {
                const t = e.data;
                (this.hotel = t), console.log(t), console.log("reeeeee", t);
              },
              (e) => {}
            );
          }
          getdevicelist() {
            this.taxiService.getdevicelist().subscribe(
              (e) => {
                var t = [];
                e.data.forEach((e, n) => {
                  let a = new ye.a();
                  (a.adname = e.adname),
                    (a.created_at = e.created_at),
                    (a.hotel_id = e.hotel_id),
                    (a.is_active = e.is_active),
                    (a.is_login = e.is_login),
                    (a.password = e.password),
                    (a.plain_password = e.plain_password),
                    (a.serial_number = e.serial_number),
                    (a.sim_number = e.sim_number),
                    (a.taxi_id = e.taxi_id),
                    (a.updated_at = e.updated_at),
                    (a.positioned_at = e.positioned_at),
                    (a.__v = e.__v),
                    (a._id = e._id),
                    (a.view = !1),
                    console.log(a),
                    t.push(a);
                }),
                  (this.items = t),
                  console.log(this.items),
                  (this.loader = !1);
              },
              (e) => {
                (this.nodata = !0), (this.loader = !1);
              }
            );
          }
          resetVenu() {
            this.venueTochange || (this.venueTochange = null),
              this.taxiService
                .updatedevicestatus(this.venuetochangeID, {
                  hotel_id: this.venueTochange,
                })
                .subscribe(
                  (e) => {
                    this.commonService.toast(
                      "Hotel updated Successfully",
                      "Success"
                    ),
                      this.getdevicelist();
                  },
                  (e) => {
                    this.commonService.toast(e.error.message, "Error");
                  }
                );
          }
          changeHotel(e, t, n) {
            console.log(n),
              (this.venueTochange = n.target.value),
              (this.venuetochangeID = e),
              (this.oldhotelId = t),
              t ? $("#confirmdResetVenu").modal("show") : this.resetVenu();
          }
          resetVenuId() {
            this.oldhotelId &&
              $("#Venue_" + this.venuetochangeID).val(this.oldhotelId._id),
              $("#confirmdResetVenu").modal("show");
          }
          saveid(e) {
            console.log(e), (this.deleteid = e);
          }
          genrateToken(e) {
            const t = e;
            this.taxiService.genratedeviespassword({ device_id: t }).subscribe(
              (e) => {
                this.commonService.toast(
                  "Key has been Generated Successfully",
                  "Success"
                ),
                  this.items.forEach((n, a) => {
                    n._id == t &&
                      ((n.plain_password = e.data[0].plain_password),
                      (n.password = e.data[0].password));
                  });
              },
              (e) => {
                this.commonService.toast(e.error.message, "Error");
              }
            ),
              (this.password = "12345"),
              (this.encriptedPasswrod = "%8EM61");
          }
          showPassword(e) {
            this.items.forEach((t, n) => {
              t._id == e && (t.view = !t.view);
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-device-list"]],
            decls: 37,
            vars: 4,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-3"],
              [1, "col-wrapper", "mt-4", "mb-4", "text-right"],
              [1, "col-md-3", "offset-6"],
              [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
              [1, "search-wrapper"],
              ["action", "", "method", "GET"],
              [1, "input-group"],
              [1, "input-group-text"],
              [1, "fa", "fa-search"],
              [
                "type",
                "text",
                "id",
                "query",
                "name",
                "query",
                "placeholder",
                "Search",
                1,
                "form-control",
                "form-control-search",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-lg-2", "col-md-3"],
              [
                1,
                "col-lg-10",
                "col-md-9",
                "zia",
                2,
                "background-color",
                "white",
              ],
              [1, "main-content-wrapper"],
              ["class", "lead", 4, "ngIf"],
              ["class", "table-responsive", 4, "ngIf"],
              [1, "card-footer"],
              [1, "text-center"],
              [
                "previousLabel",
                "",
                "nextLabel",
                "",
                3,
                "pageChange",
                4,
                "ngIf",
              ],
              [
                "id",
                "confirmdResetVenu",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "confirmdeleteLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog"],
              [1, "modal-content"],
              [1, "modal-body"],
              [1, "modal-footer"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-secondary",
                3,
                "click",
              ],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-primary",
                3,
                "click",
              ],
              [1, "lead"],
              [1, "table-responsive"],
              ["class", "table", 3, "ngStyle", 4, "ngIf"],
              [1, "table", 3, "ngStyle"],
              ["scope", "col", 2, "min-width", "140px !important"],
              ["scope", "col", 2, "min-width", "310px !important"],
              [4, "ngFor", "ngForOf"],
              [2, "min-width", "140px"],
              [2, "min-width", "310px"],
              [1, "m-w", "my-select", "form-control", 3, "id", "change"],
              ["disabled", "", "selected", ""],
              [3, "value", "selected", 4, "ngFor", "ngForOf"],
              ["value", ""],
              [2, "min-width", "210px"],
              [1, "custom-toggle", 2, "margin-bottom", "0px"],
              ["type", "checkbox", 3, "checked", "change"],
              [1, "custom-toggle-slider", "rounded-circle"],
              [4, "ngIf"],
              [1, "btn-group"],
              [
                "type",
                "button",
                1,
                "btn",
                "btn-primary",
                "my-btn-primary",
                3,
                "click",
              ],
              ["class", "fas fa-eye my-i", 4, "ngIf"],
              ["class", "fas fa-eye-slash my-i", 4, "ngIf"],
              [2, "text-align", "center", "min-width", "140px"],
              [
                "type",
                "button",
                "data-toggle",
                "dropdown",
                "aria-haspopup",
                "true",
                "aria-expanded",
                "false",
                1,
                "btn",
                "btn-primary",
                "my-btn-primary",
                "dropdown-toggle",
              ],
              [1, "fas", "fa-ellipsis-v", "my-i"],
              [1, "dropdown-menu", "menu-div"],
              ["class", "btn btn-primary my-btn mb-1", 3, "click", 4, "ngIf"],
              [3, "value", "selected"],
              [1, "fas", "fa-eye", "my-i"],
              [1, "fas", "fa-eye-slash", "my-i"],
              [1, "btn", "btn-primary", "my-btn", "mb-1", 3, "click"],
              ["previousLabel", "", "nextLabel", "", 3, "pageChange"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "div", 5),
                o["\u0275\u0275elementStart"](6, "h2"),
                o["\u0275\u0275text"](7, "Assigned Devices"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 6),
                o["\u0275\u0275elementStart"](9, "div", 7),
                o["\u0275\u0275elementStart"](10, "div", 8),
                o["\u0275\u0275elementStart"](11, "form", 9),
                o["\u0275\u0275elementStart"](12, "div", 10),
                o["\u0275\u0275elementStart"](13, "div", 11),
                o["\u0275\u0275element"](14, "i", 12),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](15, "input", 13),
                o["\u0275\u0275listener"]("ngModelChange", function (e) {
                  return (t.searchText = e);
                }),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](16, "div", 14),
                o["\u0275\u0275elementStart"](17, "div", 15),
                o["\u0275\u0275elementStart"](18, "div", 16),
                o["\u0275\u0275element"](19, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](20, "div", 17),
                o["\u0275\u0275elementStart"](21, "div", 18),
                o["\u0275\u0275template"](22, Ee, 2, 0, "p", 19),
                o["\u0275\u0275template"](23, Fe, 2, 1, "div", 20),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](24, "div", 21),
                o["\u0275\u0275elementStart"](25, "div", 22),
                o["\u0275\u0275template"](
                  26,
                  Le,
                  1,
                  0,
                  "pagination-controls",
                  23
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](27, "div", 24),
                o["\u0275\u0275elementStart"](28, "div", 25),
                o["\u0275\u0275elementStart"](29, "div", 26),
                o["\u0275\u0275elementStart"](30, "div", 27),
                o["\u0275\u0275text"](
                  31,
                  "Changing the assigned venue will reset the device password. Are you sure you want to continue ?"
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](32, "div", 28),
                o["\u0275\u0275elementStart"](33, "button", 29),
                o["\u0275\u0275listener"]("click", function () {
                  return t.resetVenuId();
                }),
                o["\u0275\u0275text"](34, " No "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](35, "button", 30),
                o["\u0275\u0275listener"]("click", function () {
                  return t.resetVenu();
                }),
                o["\u0275\u0275text"](36, " Yes "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](15),
                  o["\u0275\u0275property"]("ngModel", t.searchText),
                  o["\u0275\u0275advance"](7),
                  o["\u0275\u0275property"]("ngIf", t.nodata),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.nodata),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("ngIf", !t.nodata));
            },
            directives: [
              s.x,
              s.o,
              s.p,
              s.b,
              s.n,
              s.q,
              b,
              a.l,
              a.m,
              a.k,
              s.r,
              s.y,
              y.c,
            ],
            pipes: [y.b, E.a, a.d],
            styles: [""],
          })),
          e
        );
      })();
      function Ae(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "p", 33),
          o["\u0275\u0275text"](1, "No QR Reuest made yet."),
          o["\u0275\u0275elementEnd"]());
      }
      function qe(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "td", 54),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](" ", e.hotel_id.name, " ");
        }
      }
      function je(e, t) {
        1 & e && o["\u0275\u0275element"](0, "td", 54);
      }
      const Re = function (e) {
        return [e];
      };
      function Be(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "a", 55),
            o["\u0275\u0275text"](1, "Edit"),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275property"](
            "routerLink",
            o["\u0275\u0275pureFunction1"](
              1,
              Re,
              "/admin/qremployee-add/" + e._id
            )
          );
        }
      }
      function Ye(e, t) {
        if ((1 & e && o["\u0275\u0275element"](0, "input", 56), 2 & e)) {
          const e = o["\u0275\u0275nextContext"]().$implicit;
          o["\u0275\u0275property"]("disabled", 0 != e.is_approved || null);
        }
      }
      function He(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275template"](1, qe, 2, 1, "td", 42),
            o["\u0275\u0275template"](2, je, 1, 0, "td", 42),
            o["\u0275\u0275elementStart"](3, "td", 43),
            o["\u0275\u0275text"](4),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "td", 44),
            o["\u0275\u0275text"](6),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "td", 45),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "td", 46),
            o["\u0275\u0275elementStart"](10, "div", 47),
            o["\u0275\u0275elementStart"](11, "button", 48),
            o["\u0275\u0275element"](12, "i", 49),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "div", 50),
            o["\u0275\u0275template"](14, Be, 2, 3, "a", 51),
            o["\u0275\u0275template"](15, Ye, 1, 1, "input", 52),
            o["\u0275\u0275elementStart"](16, "input", 53),
            o["\u0275\u0275listener"]("click", function () {
              o["\u0275\u0275restoreView"](e);
              const n = t.$implicit;
              return o["\u0275\u0275nextContext"](3).saveid(n._id);
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.hotel_id),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.hotel_id),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.notes, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              0 == e.is_approved
                ? "Requested"
                : 1 == e.is_approved
                ? "Approved"
                : 2 == e.is_approved
                ? "Rejected"
                : "",
              " "
            ),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.count, " "),
            o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"]("ngIf", 0 == e.is_approved),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 0 != e.is_approved),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("disabled", 0 != e.is_approved || null);
        }
      }
      const ze = function (e) {
        return { itemsPerPage: 10, currentPage: e };
      };
      function Qe(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "table", 36),
            o["\u0275\u0275elementStart"](1, "thead"),
            o["\u0275\u0275elementStart"](2, "tr"),
            o["\u0275\u0275elementStart"](3, "th", 37),
            o["\u0275\u0275text"](4, "Venue Name"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "th", 38),
            o["\u0275\u0275text"](6, "Notes"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "th", 39),
            o["\u0275\u0275text"](8, "Status"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "th", 40),
            o["\u0275\u0275text"](10, "Number of QR codes requested"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "th", 39),
            o["\u0275\u0275text"](12, "Operation"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "tbody"),
            o["\u0275\u0275template"](14, He, 17, 8, "tr", 41),
            o["\u0275\u0275pipe"](15, "paginate"),
            o["\u0275\u0275pipe"](16, "filter"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](14),
            o["\u0275\u0275property"](
              "ngForOf",
              o["\u0275\u0275pipeBind2"](
                15,
                1,
                o["\u0275\u0275pipeBind2"](16, 4, e.items, e.searchText),
                o["\u0275\u0275pureFunction1"](7, ze, e.p)
              )
            );
        }
      }
      function $e(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 34),
            o["\u0275\u0275template"](1, Qe, 17, 9, "table", 35),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.loader);
        }
      }
      function Ue(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "pagination-controls", 57),
            o["\u0275\u0275listener"]("pageChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().p = t)
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      const Ge = function (e) {
        return { "max-height": e };
      };
      let Ke = (() => {
        class e {
          constructor(e, t, n, a, r) {
            (this.taxiservice = e),
              (this.commonService = t),
              (this.router = n),
              (this.activatedRoute = a),
              (this.propertiesService = r),
              (this.p = 1),
              (this.nodata = !1);
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.tbody),
              this.getqrlist(1),
              (this.loader = !0);
          }
          getqrlist(e) {
            var t = localStorage.getItem("userId");
            this.taxiservice.getQrCodesListByTaxiId(e, t).subscribe(
              (e) => {
                (this.items = e.data.docs),
                  console.log(this.items),
                  (this.loader = !1);
              },
              (e) => {
                (this.nodata = !0), (this.loader = !1);
              }
            );
          }
          saveid(e) {
            console.log(e), (this.deleteid = e);
          }
          deletedata() {
            (this.loader = !0),
              this.taxiservice.deleteQrCodebyadmin(this.deleteid).subscribe(
                (e) => {
                  (this.loader = !1),
                    this.commonService.toast(
                      e.message,
                      !0 === e.success ? "Success" : "Error"
                    ),
                    this.getqrlist(1);
                },
                (e) => {
                  (this.loader = !1),
                    this.commonService.toast(e.error.message, "Error");
                }
              );
          }
          routeToTakiPage() {
            this.router.navigate(["taxi/qremployee-add"]);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-qremployee-list"]],
            decls: 41,
            vars: 7,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-5", "offset-1"],
              [1, "col-wrapper", "mt-4", "mb-4"],
              [1, "col-md-3"],
              [1, "col-wrapper", "mt-4", "mb-4", "text-right"],
              [1, "btn", "btn-primary", 3, "click"],
              [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
              [1, "search-wrapper"],
              ["action", "", "method", "GET"],
              [1, "input-group"],
              [1, "input-group-text"],
              [1, "fa", "fa-search"],
              [
                "type",
                "text",
                "id",
                "query",
                "name",
                "query",
                "placeholder",
                "Search",
                1,
                "form-control",
                "form-control-search",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-lg-2", "col-md-3"],
              [
                1,
                "col-lg-10",
                "col-md-9",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "main-content-wrapper"],
              ["class", "lead", 4, "ngIf"],
              ["class", "table-responsive", 4, "ngIf"],
              [1, "card-footer"],
              [1, "text-center"],
              [
                "previousLabel",
                "",
                "nextLabel",
                "",
                3,
                "pageChange",
                4,
                "ngIf",
              ],
              [
                "id",
                "confirmdelete",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "confirmdeleteLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog"],
              [1, "modal-content"],
              [1, "modal-body"],
              [1, "modal-footer"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-secondary",
              ],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-primary",
                3,
                "click",
              ],
              [1, "lead"],
              [1, "table-responsive"],
              ["class", "table", 4, "ngIf"],
              [1, "table"],
              ["scope", "col", 2, "min-width", "210px !important"],
              ["scope", "col", 2, "min-width", "410px !important"],
              ["scope", "col", 2, "min-width", "140px !important"],
              ["scope", "col", 2, "width", "120px !important"],
              [4, "ngFor", "ngForOf"],
              ["style", "min-width: 210px", 4, "ngIf"],
              [2, "min-width", "410px"],
              [2, "min-width", "140px"],
              [2, "min-width", "120px"],
              [2, "min-width", "140px", "text-align", "center"],
              [1, "btn-group"],
              [
                "type",
                "button",
                "data-toggle",
                "dropdown",
                "aria-haspopup",
                "true",
                "aria-expanded",
                "false",
                1,
                "btn",
                "btn-primary",
                "my-btn-primary",
                "dropdown-toggle",
              ],
              [1, "fas", "fa-ellipsis-v", "my-i"],
              [1, "dropdown-menu", "menu-div"],
              [
                "class",
                "btn btn-primary my-btn mb-1",
                3,
                "routerLink",
                4,
                "ngIf",
              ],
              [
                "class",
                "btn-primary my-btn mb-1",
                "type",
                "button",
                "style",
                "height: 32px; margin-bottom: 0px",
                "name",
                "edit",
                "data-target",
                "#confirmdelete",
                "value",
                "Edit",
                3,
                "disabled",
                4,
                "ngIf",
              ],
              [
                "type",
                "button",
                "name",
                "delete",
                "data-target",
                "#confirmdelete",
                "value",
                "Delete",
                "data-toggle",
                "modal",
                1,
                "btn-primary",
                "my-btn",
                "mb-1",
                2,
                "height",
                "32px",
                "margin-bottom",
                "0px",
                3,
                "disabled",
                "click",
              ],
              [2, "min-width", "210px"],
              [1, "btn", "btn-primary", "my-btn", "mb-1", 3, "routerLink"],
              [
                "type",
                "button",
                "name",
                "edit",
                "data-target",
                "#confirmdelete",
                "value",
                "Edit",
                1,
                "btn-primary",
                "my-btn",
                "mb-1",
                2,
                "height",
                "32px",
                "margin-bottom",
                "0px",
                3,
                "disabled",
              ],
              ["previousLabel", "", "nextLabel", "", 3, "pageChange"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "div", 5),
                o["\u0275\u0275elementStart"](6, "h2"),
                o["\u0275\u0275text"](7, "QR Codes"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 6),
                o["\u0275\u0275elementStart"](9, "div", 7),
                o["\u0275\u0275elementStart"](10, "a", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.routeToTakiPage();
                }),
                o["\u0275\u0275text"](11, "Create QR Request"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](12, "div", 6),
                o["\u0275\u0275elementStart"](13, "div", 9),
                o["\u0275\u0275elementStart"](14, "div", 10),
                o["\u0275\u0275elementStart"](15, "form", 11),
                o["\u0275\u0275elementStart"](16, "div", 12),
                o["\u0275\u0275elementStart"](17, "div", 13),
                o["\u0275\u0275element"](18, "i", 14),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](19, "input", 15),
                o["\u0275\u0275listener"]("ngModelChange", function (e) {
                  return (t.searchText = e);
                }),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](20, "div", 16),
                o["\u0275\u0275elementStart"](21, "div", 17),
                o["\u0275\u0275elementStart"](22, "div", 18),
                o["\u0275\u0275element"](23, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](24, "div", 19),
                o["\u0275\u0275elementStart"](25, "div", 20),
                o["\u0275\u0275template"](26, Ae, 2, 0, "p", 21),
                o["\u0275\u0275template"](27, $e, 2, 1, "div", 22),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](28, "div", 23),
                o["\u0275\u0275elementStart"](29, "div", 24),
                o["\u0275\u0275template"](
                  30,
                  Ue,
                  1,
                  0,
                  "pagination-controls",
                  25
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](31, "div", 26),
                o["\u0275\u0275elementStart"](32, "div", 27),
                o["\u0275\u0275elementStart"](33, "div", 28),
                o["\u0275\u0275elementStart"](34, "div", 29),
                o["\u0275\u0275text"](
                  35,
                  "Are you sure you want to delete this?"
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](36, "div", 30),
                o["\u0275\u0275elementStart"](37, "button", 31),
                o["\u0275\u0275text"](38, " No "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](39, "button", 32),
                o["\u0275\u0275listener"]("click", function () {
                  return t.deletedata();
                }),
                o["\u0275\u0275text"](40, " Yes "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](19),
                  o["\u0275\u0275property"]("ngModel", t.searchText),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](5, Ge, t.tbody)
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"]("ngIf", t.nodata),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.nodata),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("ngIf", !t.nodata));
            },
            directives: [
              s.x,
              s.o,
              s.p,
              s.b,
              s.n,
              s.q,
              b,
              a.m,
              a.l,
              a.k,
              r.d,
              y.c,
            ],
            pipes: [y.b, E.a],
            styles: [
              ".btn-primary[_ngcontent-%COMP%]:disabled{border:1px solid #999!important;background-color:#ccc!important;color:#666!important}",
            ],
          })),
          e
        );
      })();
      function We(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "h3"),
          o["\u0275\u0275text"](1, "Create QR Request"),
          o["\u0275\u0275elementEnd"]());
      }
      function Je(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "h3"),
          o["\u0275\u0275text"](1, "Edit QR Request"),
          o["\u0275\u0275elementEnd"]());
      }
      function Xe(e, t) {
        1 & e && o["\u0275\u0275element"](0, "img", 23);
      }
      function Ze(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 37),
          o["\u0275\u0275text"](1, " Number of QR codes is required "),
          o["\u0275\u0275elementEnd"]());
      }
      function et(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "option", 38),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit;
          o["\u0275\u0275property"]("value", e._id),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate1"](" ", e.name, " ");
        }
      }
      function tt(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div"),
          o["\u0275\u0275text"](1, " Venue is required "),
          o["\u0275\u0275elementEnd"]());
      }
      function nt(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 37),
            o["\u0275\u0275template"](1, tt, 2, 0, "div", 8),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.f.hotel_id.errors.required);
        }
      }
      function at(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "button", 39),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).createhotel()
              );
            }),
            o["\u0275\u0275text"](1, " Create "),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function rt(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "button", 39),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).updatehotel()
              );
            }),
            o["\u0275\u0275text"](1, " Update "),
            o["\u0275\u0275elementEnd"]();
        }
      }
      const ot = function (e) {
        return { "is-invalid": e };
      };
      function it(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 24),
            o["\u0275\u0275elementStart"](1, "div", 10),
            o["\u0275\u0275elementStart"](2, "div", 25),
            o["\u0275\u0275elementStart"](3, "div", 26),
            o["\u0275\u0275elementStart"](4, "label", 27),
            o["\u0275\u0275text"](5, "Number of QR codes requested"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](6, "input", 28),
            o["\u0275\u0275template"](7, Ze, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](8, "div", 26),
            o["\u0275\u0275elementStart"](9, "label", 27),
            o["\u0275\u0275text"](10, "Assign to Venue"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "select", 30),
            o["\u0275\u0275elementStart"](12, "option", 31),
            o["\u0275\u0275text"](13, " Assign to Venue "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](14, et, 2, 2, "option", 32),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](15, nt, 2, 1, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "div", 26),
            o["\u0275\u0275elementStart"](17, "label", 27),
            o["\u0275\u0275text"](18, "Note (Optional)"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](19, "textarea", 33),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](20, "div", 10),
            o["\u0275\u0275elementStart"](21, "div", 34),
            o["\u0275\u0275elementStart"](22, "button", 35),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().onClear()
              );
            }),
            o["\u0275\u0275text"](23, " Cancel "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](24, at, 2, 0, "button", 36),
            o["\u0275\u0275template"](25, rt, 2, 0, "button", 36),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                8,
                ot,
                e.submitted && e.f.qrcodeno.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.qrcodeno.errors
            ),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                10,
                ot,
                e.submitted && e.f.hotel_id.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngValue", null),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275property"]("ngForOf", e.hotel),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.hotel_id.errors
            ),
            o["\u0275\u0275advance"](9),
            o["\u0275\u0275property"]("ngIf", e.editId),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.editId);
        }
      }
      const lt = function (e) {
        return { "max-height": e };
      };
      let dt = (() => {
        class e {
          constructor(e, t, n, a, r, o) {
            (this.taxiservice = e),
              (this.commonService = t),
              (this.router = n),
              (this.location = a),
              (this.activatedRoute = r),
              (this.propertiesService = o),
              (this.dropVal = null),
              (this.hotel_id = ""),
              (this.note = ""),
              (this.editId = !0),
              (this._id = "");
          }
          ngAfterViewInit() {}
          ngOnInit() {
            (this.tbody = this.propertiesService.createLength),
              (this.taxi_id = localStorage.getItem("userId")),
              this.gethotelforlist(),
              (this.addQRCodeForm = new s.g({
                qrcodeno: new s.d(this.qrcodeno, [s.w.required]),
                hotel_id: new s.d(null, [s.w.required]),
                note: new s.d(this.note),
              })),
              (this._id = this.activatedRoute.snapshot.params.id),
              null != this._id && this.getQrCodebyid(this._id),
              setTimeout(() => {
                document.querySelector(
                  '[href="/taxi/qremployee-list"]'
                ).className = "nav-link active";
              }, 10);
          }
          getQrCodebyid(e) {
            this.taxiservice.getQrCodebyid(e).subscribe((e) => {
              const t = e.data;
              (this.editId = !1), this.patchData(t);
            });
          }
          patchData(e) {
            this.addQRCodeForm.patchValue({
              qrcodeno: e.count,
              note: e.notes,
              hotel_id: e.hotel_id,
            });
          }
          get f() {
            return this.addQRCodeForm.controls;
          }
          back() {
            this.location.back();
          }
          updatehotel() {
            this.submitted = !0;
            const e = this.addQRCodeForm.controls;
            if (this.addQRCodeForm.invalid) console.log("Invalid form");
            else {
              const t = {
                taxi_id: this.taxi_id,
                hotel_id: e.hotel_id.value,
                count: e.qrcodeno.value,
                notes: e.note.value,
              };
              (this.loader = !0),
                this.taxiservice.updateQrCodebyid(this._id, t).subscribe(
                  (e) => {
                    this.router.navigate(["/taxi/qremployee-list"]),
                      this.commonService.toast(
                        "Qr-Request updated Successfully",
                        "Success"
                      );
                  },
                  (e) => {
                    (this.loader = !1),
                      this.commonService.toast(e.error.message, "Error");
                  }
                );
            }
          }
          createhotel() {
            this.submitted = !0;
            const e = this.addQRCodeForm.controls;
            if (this.addQRCodeForm.invalid) console.log("Invalid form");
            else {
              const t = {
                taxi_id: this.taxi_id,
                hotel_id: e.hotel_id.value,
                count: e.qrcodeno.value,
                notes: e.note.value,
              };
              (this.loader = !0),
                this.taxiservice.createQrCodeRequest(t).subscribe(
                  (e) => {
                    this.router.navigate(["/taxi/qremployee-list"]),
                      this.commonService.toast(
                        "QR Code Requested Successfully",
                        "Success"
                      );
                  },
                  (e) => {
                    (this.loader = !1),
                      this.commonService.toast(e.error.message, "Error");
                  }
                );
            }
          }
          onClear() {
            this.router.navigate(["taxi/qremployee-list"]);
          }
          gethotelforlist() {
            this.taxiservice.gethotellist().subscribe(
              (e) => {
                const t = e.data;
                (this.hotel = t), console.log("reeeeee", t);
              },
              (e) => {}
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](a.h),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-qremployee-add"]],
            decls: 27,
            vars: 8,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "height",
                "75px",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row", "mt-4"],
              [1, "col-md-2", "mb-2", "pt-2"],
              ["href", "javascript:;", 1, "back-button", 3, "click"],
              [1, "fa", "fa-arrow-left"],
              [1, "col-md-8", "mb-2"],
              [4, "ngIf"],
              [1, "container-z", 2, "margin-top", "100px"],
              [1, "row"],
              [1, "col-md-2"],
              [
                1,
                "col-md-10",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "main-content-wrapper"],
              [1, "container-fluid", "mt--7"],
              [1, "col-xl-12", "order-xl-1"],
              [1, "card-header", "bg-white", "border-0"],
              [1, "row", "align-items-center"],
              [1, "col-8"],
              [1, "card-body"],
              ["role", "form", "method", "POST", 3, "formGroup"],
              ["src", "./assets/img/ripple.gif", 4, "ngIf"],
              ["class", "pl-lg-4", 4, "ngIf"],
              ["src", "./assets/img/ripple.gif"],
              [1, "pl-lg-4"],
              [1, "col-md-7", "offset-2"],
              [1, "form-group"],
              [1, "form-control-label"],
              [
                "type",
                "number",
                "formControlName",
                "qrcodeno",
                "placeholder",
                "Enter Number of QR codes",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              ["class", "invalid-feedback", 4, "ngIf"],
              [
                "id",
                "inputState",
                "formControlName",
                "hotel_id",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              ["selected", "", 3, "ngValue"],
              [3, "value", 4, "ngFor", "ngForOf"],
              [
                "formControlName",
                "note",
                "placeholder",
                "Enter Note",
                "id",
                "note",
                "rows",
                "3",
                1,
                "form-control",
                "form-control-alternative",
              ],
              [1, "col-md-12", "text-center"],
              [
                "type",
                "button",
                1,
                "btn",
                "btn-outline-dark",
                "mr-3",
                3,
                "click",
              ],
              [
                "type",
                "submit",
                "class",
                "btn btn-primary",
                3,
                "click",
                4,
                "ngIf",
              ],
              [1, "invalid-feedback"],
              [3, "value"],
              ["type", "submit", 1, "btn", "btn-primary", 3, "click"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.back();
                }),
                o["\u0275\u0275element"](6, "i", 6),
                o["\u0275\u0275text"](7, " Back "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 7),
                o["\u0275\u0275template"](9, We, 2, 0, "h3", 8),
                o["\u0275\u0275template"](10, Je, 2, 0, "h3", 8),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](11, "div", 9),
                o["\u0275\u0275elementStart"](12, "div", 10),
                o["\u0275\u0275elementStart"](13, "div", 11),
                o["\u0275\u0275element"](14, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](15, "div", 12),
                o["\u0275\u0275elementStart"](16, "div", 13),
                o["\u0275\u0275elementStart"](17, "div", 14),
                o["\u0275\u0275elementStart"](18, "div", 10),
                o["\u0275\u0275elementStart"](19, "div", 15),
                o["\u0275\u0275elementStart"](20, "div", 16),
                o["\u0275\u0275elementStart"](21, "div", 17),
                o["\u0275\u0275element"](22, "div", 18),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](23, "div", 19),
                o["\u0275\u0275elementStart"](24, "form", 20),
                o["\u0275\u0275template"](25, Xe, 1, 0, "img", 21),
                o["\u0275\u0275template"](26, it, 26, 12, "div", 22),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](9),
                  o["\u0275\u0275property"]("ngIf", t.editId),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.editId),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](6, lt, t.tbody)
                  ),
                  o["\u0275\u0275advance"](9),
                  o["\u0275\u0275property"]("formGroup", t.addQRCodeForm),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", t.loader),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.loader));
            },
            directives: [
              a.l,
              b,
              a.m,
              s.x,
              s.o,
              s.h,
              s.s,
              s.b,
              s.n,
              s.f,
              s.u,
              a.j,
              s.v,
              s.r,
              s.y,
              a.k,
            ],
            styles: [""],
          })),
          e
        );
      })();
      function st(e, t) {
        1 & e && o["\u0275\u0275element"](0, "img", 22);
      }
      function ct(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 34),
          o["\u0275\u0275text"](1, " Please Enter Contact Person Name. "),
          o["\u0275\u0275elementEnd"]());
      }
      function mt(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 34),
          o["\u0275\u0275text"](1, " Please Enter Mobile Number. "),
          o["\u0275\u0275elementEnd"]());
      }
      function pt(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 34),
          o["\u0275\u0275text"](1, " Please EnterEmail Address. "),
          o["\u0275\u0275elementEnd"]());
      }
      const ut = function (e) {
        return { "is-invalid": e };
      };
      function gt(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 23),
            o["\u0275\u0275elementStart"](1, "div", 9),
            o["\u0275\u0275elementStart"](2, "div", 24),
            o["\u0275\u0275elementStart"](3, "div", 25),
            o["\u0275\u0275elementStart"](4, "label", 26),
            o["\u0275\u0275text"](5, " Contact Person"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](6, "input", 27),
            o["\u0275\u0275template"](7, ct, 2, 0, "div", 28),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](8, "div", 25),
            o["\u0275\u0275elementStart"](9, "label", 26),
            o["\u0275\u0275text"](10, "Mobile Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](11, "input", 29),
            o["\u0275\u0275template"](12, mt, 2, 0, "div", 28),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "div", 25),
            o["\u0275\u0275elementStart"](14, "label", 26),
            o["\u0275\u0275text"](15, "Email Address"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](16, "input", 30),
            o["\u0275\u0275template"](17, pt, 2, 0, "div", 28),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "div", 9),
            o["\u0275\u0275elementStart"](19, "div", 31),
            o["\u0275\u0275elementStart"](20, "button", 32),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().onClear()
              );
            }),
            o["\u0275\u0275text"](21, " Cancel "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "button", 33),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().updateInformation()
              );
            }),
            o["\u0275\u0275text"](23, " Confirm "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                6,
                ut,
                e.submitted && e.f.adname.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.adname.errors),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                8,
                ut,
                e.submitted && e.f.phone.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.phone.errors),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                10,
                ut,
                e.submitted && e.f.email.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.email.errors);
        }
      }
      const ht = function (e) {
        return { "max-height": e };
      };
      let ft = (() => {
        class e {
          constructor(e, t, n, a, r, o) {
            (this.taxiservice = e),
              (this.commonService = t),
              (this.router = n),
              (this.location = a),
              (this.activatedRoute = r),
              (this.propertiesService = o),
              (this.dropVal = null),
              (this.editId = !0),
              (this._id = ""),
              (this.area = "");
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.createLength),
              (this.addHotelForm = new s.g({
                adname: new s.d(this.adname, [s.w.required]),
                email: new s.d(this.email, [
                  s.w.required,
                  s.w.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                ]),
                phone: new s.d(this.phone, [
                  s.w.required,
                  s.w.minLength(10),
                  s.w.pattern("^[0-9]*$"),
                ]),
              })),
              this.getinformation(),
              setTimeout(() => {
                document.querySelector('[href="/taxi/information"]').className =
                  "nav-link active";
              }, 10);
          }
          getinformation() {
            this.taxiservice.getinformation().subscribe(
              (e) => {
                const t = e.data;
                (this.items = t),
                  (this._id = this.items._id),
                  console.log(t),
                  (this.loader = !1),
                  this.patchData(t);
              },
              (e) => {
                this.loader = !1;
              }
            );
          }
          patchData(e) {
            this.addHotelForm.patchValue({
              email: e.email,
              adname: e.adname,
              phone: e.phone,
            }),
              (this.country_code = e.country_code_moible),
              (this.country_name = e.country_iso2_mobile);
            const t = document.querySelector("#phone");
            this.obj = j()(t, { initialCountry: e.country_iso2_mobile });
          }
          get f() {
            return this.addHotelForm.controls;
          }
          back() {
            this.location.back();
          }
          updateInformation() {
            var e = this.obj.getSelectedCountryData();
            this.submitted = !0;
            const t = this.addHotelForm.controls;
            if (this.addHotelForm.invalid) console.log("Invalid form");
            else {
              const n = {
                adname: t.adname.value,
                email: t.email.value,
                phone: t.phone.value,
                country_iso2_mobile: e.iso2,
                country_code_moible: e.dialCode,
              };
              (this.loader = !0),
                this.taxiservice.updateInformation(this._id, n).subscribe(
                  (e) => {
                    this.router.navigate(["/taxi/information"]),
                      this.commonService.toast(
                        "Hotel Details updated Successfully",
                        "Success"
                      );
                  },
                  (e) => {
                    (this.loader = !1),
                      this.commonService.toast(e.message, "Error");
                  }
                );
            }
          }
          onClear() {
            this.router.navigate(["taxi/information"]);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](a.h),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-information-add"]],
            decls: 27,
            vars: 6,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "height",
                "75px",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row", "mt-4"],
              [1, "col-md-2", "mb-2", "pt-2"],
              ["href", "javascript:;", 1, "back-button", 3, "click"],
              [1, "fa", "fa-arrow-left"],
              [1, "col-md-8", "mb-2"],
              [1, "container-z", 2, "margin-top", "100px"],
              [1, "row"],
              [1, "col-md-2"],
              [
                1,
                "col-md-10",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "main-content-wrapper"],
              [1, "container-fluid", "mt--7"],
              [1, "col-xl-12", "order-xl-1"],
              [1, "card-header", "bg-white", "border-0"],
              [1, "row", "align-items-center"],
              [1, "col-8"],
              [1, "card-body"],
              ["role", "form", "method", "POST", 3, "formGroup"],
              ["src", "./assets/img/ripple.gif", 4, "ngIf"],
              ["class", "pl-lg-4", 4, "ngIf"],
              ["src", "./assets/img/ripple.gif"],
              [1, "pl-lg-4"],
              [1, "col-md-7", "offset-2"],
              [1, "form-group"],
              [1, "form-control-label"],
              [
                "type",
                "text",
                "formControlName",
                "adname",
                "placeholder",
                "Enter  Contact Person's  Name",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              ["class", "invalid-feedback", 4, "ngIf"],
              [
                "id",
                "phone",
                "type",
                "tel",
                "formControlName",
                "phone",
                "maxlength",
                "10",
                "placeholder",
                "Enter Your Mobile Number",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                "m-w",
                3,
                "ngClass",
              ],
              [
                "type",
                "text",
                "formControlName",
                "email",
                "placeholder",
                "Enter Company's Email Address",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [1, "col-md-12", "text-center"],
              [
                "type",
                "button",
                1,
                "btn",
                "btn-outline-dark",
                "mr-3",
                3,
                "click",
              ],
              ["type", "submit", 1, "btn", "btn-primary", 3, "click"],
              [1, "invalid-feedback"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.back();
                }),
                o["\u0275\u0275element"](6, "i", 6),
                o["\u0275\u0275text"](7, " Back "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 7),
                o["\u0275\u0275elementStart"](9, "h3"),
                o["\u0275\u0275text"](10, "Update Company Information"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](11, "div", 8),
                o["\u0275\u0275elementStart"](12, "div", 9),
                o["\u0275\u0275elementStart"](13, "div", 10),
                o["\u0275\u0275element"](14, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](15, "div", 11),
                o["\u0275\u0275elementStart"](16, "div", 12),
                o["\u0275\u0275elementStart"](17, "div", 13),
                o["\u0275\u0275elementStart"](18, "div", 9),
                o["\u0275\u0275elementStart"](19, "div", 14),
                o["\u0275\u0275elementStart"](20, "div", 15),
                o["\u0275\u0275elementStart"](21, "div", 16),
                o["\u0275\u0275element"](22, "div", 17),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](23, "div", 18),
                o["\u0275\u0275elementStart"](24, "form", 19),
                o["\u0275\u0275template"](25, st, 1, 0, "img", 20),
                o["\u0275\u0275template"](26, gt, 24, 12, "div", 21),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](15),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](4, ht, t.tbody)
                  ),
                  o["\u0275\u0275advance"](9),
                  o["\u0275\u0275property"]("formGroup", t.addHotelForm),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", t.loader),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.loader));
            },
            directives: [
              b,
              a.m,
              s.x,
              s.o,
              s.h,
              a.l,
              s.b,
              s.n,
              s.f,
              s.u,
              a.j,
              s.j,
            ],
            styles: [".m-w[_ngcontent-%COMP%]{min-width:100%}"],
          })),
          e
        );
      })();
      var vt = n("m0r1"),
        St = n("eNNF"),
        xt = n("FKr1"),
        bt = n("bH2/"),
        yt = n("kmnG"),
        Et = n("iadO");
      let wt = (() => {
          class e {
            constructor(e) {
              this._dateAdapter = e;
            }
            selectionFinished(e) {
              return this._createFiveDayRange(e);
            }
            createPreview(e) {
              return this._createFiveDayRange(e);
            }
            _createFiveDayRange(e) {
              if (e) {
                const t = this.getMonday(e),
                  n = this._dateAdapter.addCalendarDays(t, 6);
                return new Et.a(t, n);
              }
              return new Et.a(null, null);
            }
            getMonday(e) {
              var t = new Date(e),
                n = t.getDay(),
                a = t.getDate() - n + (0 == n ? -6 : 1);
              return new Date(t.setDate(a));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(o["\u0275\u0275inject"](xt.a));
            }),
            (e.ɵprov = o["\u0275\u0275defineInjectable"]({
              token: e,
              factory: e.ɵfac,
            })),
            e
          );
        })(),
        Ct = (() => {
          class e {
            constructor(e, t) {
              (this.daterangeService = e),
                (this.dateAdapter = t),
                (this.parentFun = new o.EventEmitter()),
                (this.ds = this.getMonday()),
                (this.range = new s.g({
                  start: new s.d(this.getMonday()),
                  end: new s.d(
                    new Date(this.ds.setDate(this.ds.getDate() + 6))
                  ),
                })),
                this.dateAdapter.setLocale("en-GB");
            }
            getMonday() {
              var e = new Date(),
                t = e.getDay(),
                n = e.getDate() - t + (0 == t ? -6 : 1);
              return new Date(e.setDate(n));
            }
            ngOnInit() {}
            startDate(e) {
              this.daterangeService.startDate = e.value;
            }
            endDate(e) {
              (this.daterangeService.endDate = e.value), this.parentFun.emit();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                o["\u0275\u0275directiveInject"](St.a),
                o["\u0275\u0275directiveInject"](xt.a)
              );
            }),
            (e.ɵcmp = o["\u0275\u0275defineComponent"]({
              type: e,
              selectors: [["app-range-picker-with-custom-range"]],
              outputs: { parentFun: "parentFun" },
              features: [
                o["\u0275\u0275ProvidersFeature"]([
                  { provide: Et.b, useClass: wt },
                ]),
              ],
              decls: 9,
              vars: 3,
              consts: [
                ["appearance", "fill"],
                ["fill", "green", 3, "formGroup", "rangePicker"],
                [
                  "matStartDate",
                  "",
                  "formControlName",
                  "start",
                  "matStartDate",
                  "",
                  "placeholder",
                  "Start date",
                  3,
                  "dateChange",
                ],
                [
                  "matEndDate",
                  "",
                  "formControlName",
                  "end",
                  "matEndDate",
                  "",
                  "placeholder",
                  "End date",
                  3,
                  "dateChange",
                ],
                ["fill", "green", "matSuffix", "", 3, "for"],
                ["picker", ""],
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (o["\u0275\u0275elementStart"](0, "mat-form-field", 0),
                    o["\u0275\u0275elementStart"](1, "mat-label"),
                    o["\u0275\u0275text"](2, "Enter a date range"),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](3, "mat-date-range-input", 1),
                    o["\u0275\u0275elementStart"](4, "input", 2),
                    o["\u0275\u0275listener"]("dateChange", function (e) {
                      return t.startDate(e);
                    }),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](5, "input", 3),
                    o["\u0275\u0275listener"]("dateChange", function (e) {
                      return t.endDate(e);
                    }),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275element"](6, "mat-datepicker-toggle", 4),
                    o["\u0275\u0275element"](
                      7,
                      "mat-date-range-picker",
                      null,
                      5
                    ),
                    o["\u0275\u0275elementEnd"]()),
                  2 & e)
                ) {
                  const e = o["\u0275\u0275reference"](8);
                  o["\u0275\u0275advance"](3),
                    o["\u0275\u0275property"]("formGroup", t.range)(
                      "rangePicker",
                      e
                    ),
                    o["\u0275\u0275advance"](3),
                    o["\u0275\u0275property"]("for", e);
                }
              },
              directives: [
                yt.b,
                yt.e,
                Et.c,
                s.o,
                s.h,
                Et.k,
                s.b,
                s.n,
                s.f,
                Et.j,
                Et.h,
                yt.f,
                Et.d,
              ],
              styles: [""],
            })),
            e
          );
        })();
      var _t = n("1yaQ"),
        It = n("wd/R"),
        kt = n.n(It),
        Dt = n("qFsG");
      const Mt = kt.a || It,
        Pt = {
          parse: { dateInput: "MM/YYYY" },
          display: {
            dateInput: "MM/YYYY",
            monthYearLabel: "MMM YYYY",
            dateA11yLabel: "LL",
            monthYearA11yLabel: "MMMM YYYY",
          },
        };
      let Tt = (() => {
        class e {
          constructor(e) {
            (this.daterangeService = e),
              (this.parentFun = new o.EventEmitter()),
              (this.date = new s.d(Mt()));
          }
          chosenYearHandler(e) {
            const t = this.date.value;
            t.year(e.year()), this.date.setValue(t);
          }
          chosenMonthHandler(e, t) {
            const n = this.date.value;
            n.month(e.month()),
              this.date.setValue(n),
              this.setDate(),
              t.close();
          }
          setDate() {
            console.log(this.date.value._d);
            var e = new Date(this.date.value._d),
              t = e.getFullYear(),
              n = e.getMonth(),
              a = new Date(t, n, 1),
              r = new Date(t, n + 1, 0);
            (this.daterangeService.startDate = a),
              (this.daterangeService.endDate = r),
              this.parentFun.emit();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(o["\u0275\u0275directiveInject"](St.a));
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-range-picker-with-custom-range-month-year"]],
            outputs: { parentFun: "parentFun" },
            features: [
              o["\u0275\u0275ProvidersFeature"]([
                { provide: xt.a, useClass: _t.b, deps: [xt.d, _t.a] },
                { provide: xt.c, useValue: Pt },
              ]),
            ],
            decls: 7,
            vars: 3,
            consts: [
              ["appearance", "fill"],
              ["matInput", "", 3, "matDatepicker", "formControl"],
              ["matSuffix", "", 3, "for"],
              [
                "startView",
                "multi-year",
                "panelClass",
                "example-month-picker",
                3,
                "yearSelected",
                "monthSelected",
              ],
              ["dp", ""],
            ],
            template: function (e, t) {
              if (1 & e) {
                const e = o["\u0275\u0275getCurrentView"]();
                o["\u0275\u0275elementStart"](0, "mat-form-field", 0),
                  o["\u0275\u0275elementStart"](1, "mat-label"),
                  o["\u0275\u0275text"](2, "Month and Year"),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275element"](3, "input", 1),
                  o["\u0275\u0275element"](4, "mat-datepicker-toggle", 2),
                  o["\u0275\u0275elementStart"](5, "mat-datepicker", 3, 4),
                  o["\u0275\u0275listener"]("yearSelected", function (e) {
                    return t.chosenYearHandler(e);
                  })("monthSelected", function (n) {
                    o["\u0275\u0275restoreView"](e);
                    const a = o["\u0275\u0275reference"](6);
                    return t.chosenMonthHandler(n, a);
                  }),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"]();
              }
              if (2 & e) {
                const e = o["\u0275\u0275reference"](6);
                o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("matDatepicker", e)(
                    "formControl",
                    t.date
                  ),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("for", e);
              }
            },
            directives: [
              yt.b,
              yt.e,
              Dt.b,
              Et.f,
              s.b,
              s.n,
              s.e,
              Et.h,
              yt.f,
              Et.e,
            ],
            styles: [
              ".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%]{pointer-events:none}.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%]{display:none}",
            ],
          })),
          e
        );
      })();
      const Ot = kt.a || It,
        Vt = {
          parse: { dateInput: "YYYY" },
          display: { dateInput: "YYYY", monthYearLabel: "YYYY" },
        };
      let Ft = (() => {
        class e {
          constructor(e) {
            (this.daterangeService = e),
              (this.parentFun = new o.EventEmitter()),
              (this.date = new s.d(Ot()));
          }
          chosenYearHandler(e, t) {
            const n = this.date.value;
            console.log(n._d),
              n.year(e.year()),
              this.date.setValue(n),
              this.setDate(),
              t.close();
          }
          chosenMonthHandler(e, t) {}
          setDate() {
            var e = new Date(this.date.value._d);
            e.getFullYear(),
              e.getMonth(),
              (this.daterangeService.startDate = new Date(
                e.getFullYear(),
                0,
                1
              )),
              (this.daterangeService.endDate = new Date(
                e.getFullYear(),
                11,
                31
              )),
              this.parentFun.emit();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(o["\u0275\u0275directiveInject"](St.a));
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-range-picker-with-custom-range-year"]],
            outputs: { parentFun: "parentFun" },
            features: [
              o["\u0275\u0275ProvidersFeature"]([
                { provide: xt.a, useClass: _t.b, deps: [xt.d, _t.a] },
                { provide: xt.c, useValue: Vt },
              ]),
            ],
            decls: 7,
            vars: 3,
            consts: [
              ["appearance", "fill"],
              ["matInput", "", 3, "matDatepicker", "formControl"],
              ["matSuffix", "", 3, "for"],
              [
                "startView",
                "multi-year",
                "panelClass",
                "example-month-picker",
                3,
                "yearSelected",
              ],
              ["dp", ""],
            ],
            template: function (e, t) {
              if (1 & e) {
                const e = o["\u0275\u0275getCurrentView"]();
                o["\u0275\u0275elementStart"](0, "mat-form-field", 0),
                  o["\u0275\u0275elementStart"](1, "mat-label"),
                  o["\u0275\u0275text"](2, "Year"),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275element"](3, "input", 1),
                  o["\u0275\u0275element"](4, "mat-datepicker-toggle", 2),
                  o["\u0275\u0275elementStart"](5, "mat-datepicker", 3, 4),
                  o["\u0275\u0275listener"]("yearSelected", function (n) {
                    o["\u0275\u0275restoreView"](e);
                    const a = o["\u0275\u0275reference"](6);
                    return t.chosenYearHandler(n, a);
                  }),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"]();
              }
              if (2 & e) {
                const e = o["\u0275\u0275reference"](6);
                o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("matDatepicker", e)(
                    "formControl",
                    t.date
                  ),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("for", e);
              }
            },
            directives: [
              yt.b,
              yt.e,
              Dt.b,
              Et.f,
              s.b,
              s.n,
              s.e,
              Et.h,
              yt.f,
              Et.e,
            ],
            styles: [
              ".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%]{pointer-events:none}.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%]{display:none}",
            ],
          })),
          e
        );
      })();
      var Lt = n("pxUr");
      function Nt(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "mat-form-field", 35),
            o["\u0275\u0275elementStart"](1, "mat-label"),
            o["\u0275\u0275text"](2, "Enter a date range"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "mat-date-range-input", 36),
            o["\u0275\u0275elementStart"](4, "input", 37),
            o["\u0275\u0275listener"]("dateChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().startDate(t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "input", 38),
            o["\u0275\u0275listener"]("dateChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().endDate(t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](6, "mat-datepicker-toggle", 39),
            o["\u0275\u0275element"](7, "mat-date-range-picker", 40, 41),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275reference"](8),
            t = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("formGroup", t.range)("rangePicker", e),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("for", e);
        }
      }
      function At(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](
            0,
            "app-range-picker-with-custom-range",
            42
          ),
            o["\u0275\u0275listener"]("parentFun", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().loadDataDashBoard()
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function qt(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](
            0,
            "app-range-picker-with-custom-range-month-year",
            42
          ),
            o["\u0275\u0275listener"]("parentFun", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().loadDataDashBoard()
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function jt(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](
            0,
            "app-range-picker-with-custom-range-year",
            42
          ),
            o["\u0275\u0275listener"]("parentFun", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().loadDataDashBoard()
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function Rt(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "select", 43),
            o["\u0275\u0275listener"]("change", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().selectQuarter(t)
              );
            }),
            o["\u0275\u0275elementStart"](1, "option", 44),
            o["\u0275\u0275text"](2, "January - March"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "option", 45),
            o["\u0275\u0275text"](4, "April - June"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "option", 46),
            o["\u0275\u0275text"](6, "July - September"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "option", 47),
            o["\u0275\u0275text"](8, "October - December"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function Bt(e, t) {
        if ((1 & e && o["\u0275\u0275element"](0, "a", 48), 2 & e)) {
          const e = t.$implicit;
          o["\u0275\u0275property"](
            "ngClass",
            "Taxis" == e.name || "Venues" == e.name ? "search-header" : ""
          )("innerHTML", e.name, o["\u0275\u0275sanitizeHtml"]);
        }
      }
      function Yt(e, t) {
        1 & e && o["\u0275\u0275element"](0, "div", 49),
          2 & e &&
            o["\u0275\u0275property"](
              "innerHTML",
              t.$implicit,
              o["\u0275\u0275sanitizeHtml"]
            );
      }
      function Ht(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 50),
          o["\u0275\u0275elementStart"](1, "a", 51),
          o["\u0275\u0275text"](2, " Average pickup time:"),
          o["\u0275\u0275elementStart"](3, "span", 52),
          o["\u0275\u0275text"](4, "1"),
          o["\u0275\u0275elementEnd"](),
          o["\u0275\u0275elementEnd"](),
          o["\u0275\u0275elementEnd"]());
      }
      function zt(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function Qt(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function $t(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Week "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, zt, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, Qt, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_total_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change < 0
            );
        }
      }
      function Ut(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function Gt(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function Kt(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Month "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Ut, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, Gt, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_total_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change < 0
            );
        }
      }
      function Wt(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function Jt(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function Xt(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Quarter "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Wt, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, Jt, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_total_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change < 0
            );
        }
      }
      function Zt(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function en(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function tn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Year "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Zt, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, en, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_total_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_total_bookings_change < 0
            );
        }
      }
      function nn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function an(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function rn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Week "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, nn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, an, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_completed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change < 0
            );
        }
      }
      function on(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function ln(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function dn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Month "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, on, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, ln, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_completed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change < 0
            );
        }
      }
      function sn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function cn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function mn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Quarter "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, sn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, cn, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_completed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change < 0
            );
        }
      }
      function pn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function un(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function gn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Year "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, pn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, un, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_completed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_completed_bookings_change < 0
            );
        }
      }
      function hn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function fn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function vn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Week "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, hn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, fn, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_cancelled_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change < 0
            );
        }
      }
      function Sn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function xn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function bn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Month "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Sn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, xn, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_cancelled_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change < 0
            );
        }
      }
      function yn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function En(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function wn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Quarter "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, yn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, En, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_cancelled_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change < 0
            );
        }
      }
      function Cn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function _n(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function In(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Year "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Cn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, _n, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_cancelled_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.previous_cancelled_bookings_change < 0
            );
        }
      }
      function kn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function Dn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function Mn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Week "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, kn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, Dn, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.failed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change < 0
            );
        }
      }
      function Pn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function Tn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function On(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Month "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Pn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, Tn, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.failed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change < 0
            );
        }
      }
      function Vn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function Fn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function Ln(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Quarter "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Vn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, Fn, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.failed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change < 0
            );
        }
      }
      function Nn(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 62);
      }
      function An(e, t) {
        1 & e && o["\u0275\u0275element"](0, "i", 63);
      }
      function qn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "p", 59),
            o["\u0275\u0275text"](1, "Last Year "),
            o["\u0275\u0275elementStart"](2, "span"),
            o["\u0275\u0275text"](3),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](4, Nn, 1, 0, "i", 60),
            o["\u0275\u0275template"](5, An, 1, 0, "i", 61),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.failed_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change > 0
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.items.failed_bookings_change < 0
            );
        }
      }
      function jn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 3),
            o["\u0275\u0275elementStart"](1, "div", 53),
            o["\u0275\u0275elementStart"](2, "h6", 54),
            o["\u0275\u0275text"](3, "Total Bookings"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](4, "h4", 55),
            o["\u0275\u0275text"](5),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](6, $t, 6, 3, "p", 56),
            o["\u0275\u0275template"](7, Kt, 6, 3, "p", 56),
            o["\u0275\u0275template"](8, Xt, 6, 3, "p", 56),
            o["\u0275\u0275template"](9, tn, 6, 3, "p", 56),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](10, "div", 53),
            o["\u0275\u0275elementStart"](11, "h6", 54),
            o["\u0275\u0275text"](12, "Pending Bookings"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "h4", 55),
            o["\u0275\u0275text"](14),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "p", 57),
            o["\u0275\u0275text"](16, "Last Week "),
            o["\u0275\u0275elementStart"](17, "span", 58),
            o["\u0275\u0275text"](18),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](19, "div", 53),
            o["\u0275\u0275elementStart"](20, "h6", 54),
            o["\u0275\u0275text"](21, "Completed Bookings"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "h4", 55),
            o["\u0275\u0275text"](23),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](24, rn, 6, 3, "p", 56),
            o["\u0275\u0275template"](25, dn, 6, 3, "p", 56),
            o["\u0275\u0275template"](26, mn, 6, 3, "p", 56),
            o["\u0275\u0275template"](27, gn, 6, 3, "p", 56),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](28, "div", 53),
            o["\u0275\u0275elementStart"](29, "h6", 54),
            o["\u0275\u0275text"](30, "Cancelled Bookings"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](31, "h4", 55),
            o["\u0275\u0275text"](32),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](33, vn, 6, 3, "p", 56),
            o["\u0275\u0275template"](34, bn, 6, 3, "p", 56),
            o["\u0275\u0275template"](35, wn, 6, 3, "p", 56),
            o["\u0275\u0275template"](36, In, 6, 3, "p", 56),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](37, "div", 53),
            o["\u0275\u0275elementStart"](38, "h6", 54),
            o["\u0275\u0275text"](39, "Failed Bookings"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](40, "h4", 55),
            o["\u0275\u0275text"](41),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](42, Mn, 6, 3, "p", 56),
            o["\u0275\u0275template"](43, On, 6, 3, "p", 56),
            o["\u0275\u0275template"](44, Ln, 6, 3, "p", 56),
            o["\u0275\u0275template"](45, qn, 6, 3, "p", 56),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.total_bookings),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              5 == e.reportType || 1 == e.reportType
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 2 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 3 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 4 == e.reportType),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.pending_bookings),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.items.previous_total_bookings_change + " ",
              ""
            ),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.completed_bookings),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              5 == e.reportType || 1 == e.reportType
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 2 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 3 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 4 == e.reportType),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.cancelled_bookings),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              5 == e.reportType || 1 == e.reportType
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 2 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 3 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 4 == e.reportType),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.failed_bookings),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              5 == e.reportType || 1 == e.reportType
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 2 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 3 == e.reportType),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 4 == e.reportType);
        }
      }
      function Rn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "li", 66),
            o["\u0275\u0275text"](1),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275textInterpolate"](e.venue_name);
        }
      }
      function Bn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "ul", 64),
            o["\u0275\u0275template"](1, Rn, 2, 1, "li", 65),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngForOf", e.items.top_venues);
        }
      }
      function Yn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 67),
            o["\u0275\u0275elementStart"](1, "div", 68),
            o["\u0275\u0275elementStart"](2, "h6", 54),
            o["\u0275\u0275text"](3, "Total Devices"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](4, "h4", 55),
            o["\u0275\u0275text"](5),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](6, "div", 68),
            o["\u0275\u0275elementStart"](7, "h6", 54),
            o["\u0275\u0275text"](8, "Assigned Devices"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "h4", 55),
            o["\u0275\u0275text"](10),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "div", 68),
            o["\u0275\u0275elementStart"](12, "h6", 54),
            o["\u0275\u0275text"](13, "Unassigned Devices"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](14, "h4", 55),
            o["\u0275\u0275text"](15),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "div", 68),
            o["\u0275\u0275elementStart"](17, "h6", 54),
            o["\u0275\u0275text"](18, "Active Devices"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](19, "h4", 55),
            o["\u0275\u0275text"](20),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](21, "div", 68),
            o["\u0275\u0275elementStart"](22, "h6", 54),
            o["\u0275\u0275text"](23, "Inactive Devices"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](24, "h4", 55),
            o["\u0275\u0275text"](25),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.total_devices),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.assigned_devices),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.unassigned_devices),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.active_devices),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275textInterpolate"](e.items.inactive_devices);
        }
      }
      function Hn(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "agm-marker", 72),
            o["\u0275\u0275listener"]("mouseOver", function (t) {
              o["\u0275\u0275restoreView"](e);
              const n = o["\u0275\u0275reference"](2);
              return o["\u0275\u0275nextContext"](2).onMouseOver(n, t);
            })("mouseOut", function (t) {
              o["\u0275\u0275restoreView"](e);
              const n = o["\u0275\u0275reference"](2);
              return o["\u0275\u0275nextContext"](2).onMouseOut(n, t);
            }),
            o["\u0275\u0275elementStart"](1, "agm-info-window", 73, 74),
            o["\u0275\u0275elementStart"](3, "div", 75),
            o["\u0275\u0275elementStart"](4, "h5", 76),
            o["\u0275\u0275text"](5),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](6, "h5", 76),
            o["\u0275\u0275text"](7),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = t.$implicit,
            n = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275property"]("latitude", e.location.coordinates[1])(
            "longitude",
            e.location.coordinates[0]
          )("iconUrl", n.icon),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("disableAutoPan", !1),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate"](e.name),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate"](e.address);
        }
      }
      function zn(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 67),
            o["\u0275\u0275elementStart"](1, "div", 69),
            o["\u0275\u0275elementStart"](2, "agm-map", 70),
            o["\u0275\u0275template"](3, Hn, 8, 6, "agm-marker", 71),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](2),
            o["\u0275\u0275property"]("zoom", 8)("latitude", e.lat)(
              "longitude",
              e.lng
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngForOf", e.deviceList);
        }
      }
      const Qn = function (e) {
        return { "max-height": e };
      };
      vt.a.register(...vt.b);
      let $n = (() => {
        class e {
          constructor(e, t, n, a, r) {
            (this.router = e),
              (this.propertiesService = t),
              (this.taxiService = n),
              (this.daterangeService = a),
              (this.dateAdapter = r),
              (this.icon = {
                url: "assets/img/mobile.png",
                scaledSize: { width: 35, height: 50 },
              }),
              (this.lat = 51.678418),
              (this.lng = 7.809007),
              (this.reportType = 5),
              (this.ds = new Date()),
              (this.range = new s.g({
                start: new s.d(
                  new Date(this.ds.setDate(this.ds.getDate() - 6))
                ),
                end: new s.d(new Date()),
              })),
              (this.paiHotel = 10),
              (this.pieChartData = [10, 20, 30, 20, 50, 40, 5]),
              (this.barMakiData = [10, 20, 30, 40]),
              (this.barTaxiData = [15, 5, 25, 56]),
              (this.barLabelData = ["January", "February", "March", "April"]),
              (this.keyword = "name"),
              (this.data1 = []),
              (this.customFilter = function (e, t) {
                return e;
              }),
              this.dateAdapter.setLocale("en-GB");
          }
          routeToTakiPage() {
            this.router.navigate(["admin/dashboard"]);
          }
          selectEvent(e) {
            this.viewDetail(e.id, e.type);
          }
          onChangeSearch(e) {
            e && e.length > 2
              ? this.taxiService.dashboardSearch(e, this.taxiId).subscribe(
                  (e) => {
                    console.log("search data"),
                      (this.data1 = []),
                      e.data.taxis.length > 0 &&
                        ((this.data1 = []),
                        this.data1.push({ id: "taxi", name: "Taxis", type: 0 }),
                        e.data.taxis.forEach((e) => {
                          this.data1.push({ id: e._id, name: e.name, type: 1 });
                        })),
                      e.data.venues.length > 0 &&
                        (this.data1.push({
                          id: "Venues",
                          name: "Venues",
                          type: 0,
                        }),
                        e.data.venues.forEach((e) => {
                          this.data1.push({ id: e._id, name: e.name, type: 2 });
                        })),
                      console.log(this.data1);
                  },
                  (e) => {
                    this.loader = !1;
                  }
                )
              : (this.data1 = []);
          }
          viewDetail(e, t) {
            console.log("view detiaed called"),
              console.log(t),
              t > 0 &&
                this.router.navigate(
                  1 == t ? ["admin/taxi-add/" + e] : ["admin/hotel-add/" + e]
                );
          }
          onFocused(e) {}
          getdevicelist() {
            this.taxiService.getdevicelist().subscribe(
              (e) => {
                console.log("devices");
                var t = [];
                console.log(e.data),
                  e.data.forEach((e) => {
                    e.hotel_id &&
                      (console.log(e.hotel_id.location.coordinates[0]),
                      (this.lat = e.hotel_id.location.coordinates[1]),
                      (this.lng = e.hotel_id.location.coordinates[0]),
                      t.push(e.hotel_id));
                  }),
                  console.log(t),
                  (this.deviceList = t),
                  console.log(this.deviceList);
              },
              (e) => {
                this.loader = !1;
              }
            );
          }
          getMonday() {
            var e = new Date(),
              t = e.getDay(),
              n = e.getDate() - t + (0 == t ? -6 : 1);
            return new Date(e.setDate(n));
          }
          selectReportType(e) {
            if (this.reportType == e) (this.reportType = 5), this.reSetDates();
            else if (((this.reportType = e), 1 == this.reportType)) {
              var t = this.getMonday(),
                n = new Date(t),
                a = new Date(n.setDate(n.getDate() + 6));
              (this.daterangeService.startDate = t),
                (this.daterangeService.endDate = a);
            } else if (2 == this.reportType) {
              var r = new Date(),
                o = r.getFullYear(),
                i = r.getMonth(),
                l = new Date(o, i, 1),
                d = new Date(o, i + 1, 0);
              (this.daterangeService.startDate = l),
                (this.daterangeService.endDate = d);
            } else
              3 == this.reportType
                ? this.getLastDayAndStartDayofQuarter(0)
                : 4 == this.reportType &&
                  ((this.daterangeService.startDate = new Date(
                    new Date().getFullYear(),
                    0,
                    1
                  )),
                  (this.daterangeService.endDate = new Date(
                    new Date().getFullYear(),
                    11,
                    31
                  )));
            this.loadDataDashBoard();
          }
          selectQuarter(e) {
            const t = e.target.value;
            t &&
              (1 == t
                ? this.getLastDayAndStartDayofQuarter(0)
                : 2 == t && this.getLastDayAndStartDayofQuarter(3),
              3 == t && this.getLastDayAndStartDayofQuarter(6),
              4 == t && this.getLastDayAndStartDayofQuarter(9),
              this.loadDataDashBoard());
          }
          getLastDayAndStartDayofQuarter(e) {
            var t = new Date(new Date().getFullYear(), e, 1),
              n = new Date(t),
              a = new Date(t.setMonth(t.getMonth() + 2)),
              r = new Date(a),
              o = r.getFullYear(),
              i = r.getMonth(),
              l = new Date(o, i + 1, 0);
            (this.daterangeService.startDate = n),
              (this.daterangeService.endDate = l);
          }
          reSetDates() {
            var e = new Date();
            (this.daterangeService.endDate = new Date()),
              (this.daterangeService.startDate = new Date(
                e.setDate(e.getDate() - 6)
              ));
          }
          ngOnInit() {
            (this.taxiId = localStorage.getItem("userId")),
              this.reSetDates(),
              this.loadDataDashBoard(),
              this.getdevicelist(),
              (this.tbody = this.propertiesService.tbody),
              (this.myDoughnutChart = new vt.a("myDoughnutChart", {
                type: "pie",
                data: {
                  datasets: [
                    {
                      data: this.pieChartData,
                      backgroundColor: [
                        "#FFCE54",
                        "#ED5565",
                        "#FC6E51",
                        "#A0D468",
                        "#48CFAD",
                        "#4FC1E9",
                        "#5D9CEC",
                      ],
                      borderColor: [
                        "#F6BB42",
                        "#DA4453",
                        "#E9573F",
                        "#8CC152",
                        "#37BC9B",
                        "#3BAFDA",
                        "#4A89DC",
                      ],
                      borderWidth: 1,
                    },
                  ],
                  labels: [
                    "Hotel",
                    "Bar",
                    "Restaurant",
                    "Sporting",
                    "Government",
                    "Reception",
                    "Other",
                  ],
                },
              })),
              (this.barChart = new vt.a("mySecondChart", {
                type: "bar",
                data: {
                  datasets: [
                    {
                      type: "bar",
                      label: "Taxi",
                      data: this.barTaxiData,
                      backgroundColor: ["#72b7f2"],
                      borderColor: ["#72b7f2"],
                      borderWidth: 1,
                    },
                    {
                      type: "bar",
                      label: "Maxi",
                      data: this.barMakiData,
                      backgroundColor: ["#1261A0"],
                      borderColor: ["#1261A0"],
                      borderWidth: 1,
                    },
                  ],
                  labels: this.barLabelData,
                },
                options: {
                  scales: { xAxes: { stacked: !0 }, yAxes: { stacked: !0 } },
                },
              }));
          }
          loadDataDashBoard() {
            var e = new Date(this.daterangeService.startDate),
              t = new Date(this.daterangeService.endDate);
            console.log(e), console.log(t);
            const n =
                e.getFullYear().toString() +
                "-" +
                (e.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                e.getDate().toString().padStart(2, "0"),
              a =
                t.getFullYear().toString() +
                "-" +
                (t.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                t.getDate().toString().padStart(2, "0");
            console.log(n),
              console.log(a),
              this.taxiService
                .getDashboardData({
                  start_date: n,
                  end_date: a,
                  report_type: this.reportType,
                  taxi_id: this.taxiId,
                })
                .subscribe(
                  (e) => {
                    (this.items = e.data),
                      console.log(e.data),
                      (this.loader = !1),
                      console.log(this.pieChartData),
                      this.updateDonetChart(),
                      this.updateBarChart();
                  },
                  (e) => {
                    this.loader = !1;
                  }
                ),
              console.log(this.daterangeService.startDate),
              console.log(this.daterangeService.endDate);
          }
          updateBarChart() {
            (this.barLabelData = []),
              (this.barMakiData = []),
              (this.barTaxiData = []),
              this.items.booking_by_taxi_type.forEach((e) => {
                this.barLabelData.push(e.date),
                  this.barMakiData.push(e.maxi),
                  this.barTaxiData.push(e.taxi);
              }),
              (this.barChart.data.datasets[0].data = this.barMakiData),
              (this.barChart.data.datasets[1].data = this.barTaxiData),
              (this.barChart.data.labels = this.barLabelData),
              this.barChart.update();
          }
          updateDonetChart() {
            (this.pieChartData = []),
              this.pieChartData.push(
                this.items.booking_by_venue_category[0].Hotel
              ),
              this.pieChartData.push(
                this.items.booking_by_venue_category[1].Bar
              ),
              this.pieChartData.push(
                this.items.booking_by_venue_category[2].Restaurant
              ),
              this.pieChartData.push(
                this.items.booking_by_venue_category[3].Sporting
              ),
              this.pieChartData.push(
                this.items.booking_by_venue_category[4].Government
              ),
              this.pieChartData.push(
                this.items.booking_by_venue_category[5].Reception
              ),
              this.pieChartData.push(
                this.items.booking_by_venue_category[6].Other
              ),
              console.log(this.myDoughnutChart.data.datasets[0].data),
              (this.myDoughnutChart.data.datasets[0].data = this.pieChartData),
              this.myDoughnutChart.update();
          }
          startDate(e) {
            this.daterangeService.startDate = e.value;
          }
          endDate(e) {
            (this.daterangeService.endDate = e.value), this.loadDataDashBoard();
          }
          onMouseOver(e, t) {
            e.open(),
              setTimeout(() => {
                document
                  .getElementsByClassName("gm-ui-hover-effect")[0]
                  .remove();
              }, 5);
          }
          onMouseOut(e, t) {
            e.close();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](d.a),
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](St.a),
              o["\u0275\u0275directiveInject"](xt.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-dashboard"]],
            decls: 50,
            vars: 22,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-4", "p-0"],
              [1, "col-wrapper", "mt-4", "pt-1", "text-left"],
              ["role", "group", 1, "btn-group"],
              ["type", "button", 1, "btn", "my-btn", 3, "ngClass", "click"],
              [1, "col-md-3", "p-0", "mt-3"],
              ["appearance", "fill", 4, "ngIf"],
              [3, "parentFun", 4, "ngIf"],
              [
                "class",
                "m-w my-select mt-2 form-control",
                3,
                "change",
                4,
                "ngIf",
              ],
              [1, "col-md-3"],
              [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
              [1, "ng-autocomplete"],
              [
                "placeholder",
                "Search",
                3,
                "data",
                "customFilter",
                "searchKeyword",
                "itemTemplate",
                "notFoundTemplate",
                "selected",
                "inputChanged",
                "inputFocused",
              ],
              ["itemTemplate", ""],
              ["notFoundTemplate", ""],
              ["class", "col-md-2 mt-4 pt-2", 4, "ngIf"],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-lg-2", "col-md-3"],
              [
                1,
                "col-lg-10",
                "col-md-9",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "main-content-wrapper"],
              [1, "container-fluid"],
              ["class", "row", 4, "ngIf"],
              [1, "col-md-3", "mt-2", "pr-0", "pl-0", "ml-1"],
              [1, "card"],
              [1, "card-header", "text-center", "pl-0", "pr-0"],
              [
                "class",
                "list-group list-group-flush text-center pl-0 pr-0",
                4,
                "ngIf",
              ],
              [1, "col-md-4", "ml-4", "p-0"],
              ["id", "myDoughnutChart", 1, ""],
              [1, "col-md-4", "ml-5", "p-0"],
              ["id", "mySecondChart"],
              ["class", "row mt-4", 4, "ngIf"],
              ["appearance", "fill"],
              ["fill", "green", 3, "formGroup", "rangePicker"],
              [
                "matStartDate",
                "",
                "formControlName",
                "start",
                "matStartDate",
                "",
                "placeholder",
                "Start date",
                3,
                "dateChange",
              ],
              [
                "matEndDate",
                "",
                "formControlName",
                "end",
                "matEndDate",
                "",
                "placeholder",
                "End date",
                3,
                "dateChange",
              ],
              ["fill", "green", "matSuffix", "", 3, "for"],
              ["color", "primary"],
              ["picker", ""],
              [3, "parentFun"],
              [1, "m-w", "my-select", "mt-2", "form-control", 3, "change"],
              ["selected", "", "value", "1"],
              ["value", "2"],
              ["value", "3"],
              ["value", "4"],
              [
                "href",
                "javascript:;",
                2,
                "padding-top",
                "0px",
                "padding-bottom",
                "0px",
                3,
                "ngClass",
                "innerHTML",
              ],
              [3, "innerHTML"],
              [1, "col-md-2", "mt-4", "pt-2"],
              ["href", "javascript:;", "id", "today-booking"],
              [1, "booking-no"],
              [1, "card1"],
              [1, "card1-title"],
              [1, "current-data"],
              ["class", "previous-data", 4, "ngIf"],
              [1, "previous-data", "cc-white"],
              [1, "cc-white"],
              [1, "previous-data"],
              ["style", "color: green;", "class", "fas fa-arrow-up", 4, "ngIf"],
              ["style", "color: red;", "class", "fas fa-arrow-down", 4, "ngIf"],
              [1, "fas", "fa-arrow-up", 2, "color", "green"],
              [1, "fas", "fa-arrow-down", 2, "color", "red"],
              [
                1,
                "list-group",
                "list-group-flush",
                "text-center",
                "pl-0",
                "pr-0",
              ],
              ["class", "list-group-item", 4, "ngFor", "ngForOf"],
              [1, "list-group-item"],
              [1, "row", "mt-4"],
              [1, "card1", "col"],
              [1, "col-md-12", "col-lg-12"],
              [
                2,
                "height",
                "500px",
                "width",
                "100%",
                "vertical-align",
                "middle",
                3,
                "zoom",
                "latitude",
                "longitude",
              ],
              [
                3,
                "latitude",
                "longitude",
                "iconUrl",
                "mouseOver",
                "mouseOut",
                4,
                "ngFor",
                "ngForOf",
              ],
              [3, "latitude", "longitude", "iconUrl", "mouseOver", "mouseOut"],
              [3, "disableAutoPan"],
              ["infoWindow", ""],
              [1, "mt-3"],
              [1, "text-center"],
            ],
            template: function (e, t) {
              if (
                (1 & e &&
                  (o["\u0275\u0275elementStart"](0, "header", 0),
                  o["\u0275\u0275elementStart"](1, "section", 1),
                  o["\u0275\u0275elementStart"](2, "div", 2),
                  o["\u0275\u0275elementStart"](3, "div", 3),
                  o["\u0275\u0275elementStart"](4, "div", 4),
                  o["\u0275\u0275elementStart"](5, "div", 5),
                  o["\u0275\u0275elementStart"](6, "div", 6),
                  o["\u0275\u0275elementStart"](7, "button", 7),
                  o["\u0275\u0275listener"]("click", function () {
                    return t.selectReportType(1);
                  }),
                  o["\u0275\u0275text"](8, "Week"),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](9, "button", 7),
                  o["\u0275\u0275listener"]("click", function () {
                    return t.selectReportType(2);
                  }),
                  o["\u0275\u0275text"](10, "Month"),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](11, "button", 7),
                  o["\u0275\u0275listener"]("click", function () {
                    return t.selectReportType(3);
                  }),
                  o["\u0275\u0275text"](12, "Quarter"),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](13, "button", 7),
                  o["\u0275\u0275listener"]("click", function () {
                    return t.selectReportType(4);
                  }),
                  o["\u0275\u0275text"](14, "Year"),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](15, "div", 8),
                  o["\u0275\u0275template"](16, Nt, 9, 3, "mat-form-field", 9),
                  o["\u0275\u0275template"](
                    17,
                    At,
                    1,
                    0,
                    "app-range-picker-with-custom-range",
                    10
                  ),
                  o["\u0275\u0275template"](
                    18,
                    qt,
                    1,
                    0,
                    "app-range-picker-with-custom-range-month-year",
                    10
                  ),
                  o["\u0275\u0275template"](
                    19,
                    jt,
                    1,
                    0,
                    "app-range-picker-with-custom-range-year",
                    10
                  ),
                  o["\u0275\u0275template"](20, Rt, 9, 0, "select", 11),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](21, "div", 12),
                  o["\u0275\u0275elementStart"](22, "div", 13),
                  o["\u0275\u0275elementStart"](23, "div", 14),
                  o["\u0275\u0275elementStart"](24, "ng-autocomplete", 15),
                  o["\u0275\u0275listener"]("selected", function (e) {
                    return t.selectEvent(e);
                  })("inputChanged", function (e) {
                    return t.onChangeSearch(e);
                  })("inputFocused", function (e) {
                    return t.onFocused(e);
                  }),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275template"](
                    25,
                    Bt,
                    1,
                    2,
                    "ng-template",
                    null,
                    16,
                    o["\u0275\u0275templateRefExtractor"]
                  ),
                  o["\u0275\u0275template"](
                    27,
                    Yt,
                    1,
                    1,
                    "ng-template",
                    null,
                    17,
                    o["\u0275\u0275templateRefExtractor"]
                  ),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275template"](29, Ht, 5, 0, "div", 18),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](30, "div", 19),
                  o["\u0275\u0275elementStart"](31, "div", 20),
                  o["\u0275\u0275elementStart"](32, "div", 21),
                  o["\u0275\u0275element"](33, "app-sidebar"),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](34, "div", 22),
                  o["\u0275\u0275elementStart"](35, "div", 23),
                  o["\u0275\u0275elementStart"](36, "div", 24),
                  o["\u0275\u0275template"](37, jn, 46, 22, "div", 25),
                  o["\u0275\u0275elementStart"](38, "div", 3),
                  o["\u0275\u0275elementStart"](39, "div", 26),
                  o["\u0275\u0275elementStart"](40, "div", 27),
                  o["\u0275\u0275elementStart"](41, "div", 28),
                  o["\u0275\u0275text"](42, " Venue - Top 5 Performers "),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275template"](43, Bn, 2, 1, "ul", 29),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](44, "div", 30),
                  o["\u0275\u0275element"](45, "canvas", 31),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementStart"](46, "div", 32),
                  o["\u0275\u0275element"](47, "canvas", 33),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275template"](48, Yn, 26, 5, "div", 34),
                  o["\u0275\u0275template"](49, zn, 4, 4, "div", 34),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"](),
                  o["\u0275\u0275elementEnd"]()),
                2 & e)
              ) {
                const e = o["\u0275\u0275reference"](26),
                  n = o["\u0275\u0275reference"](28);
                o["\u0275\u0275advance"](7),
                  o["\u0275\u0275property"](
                    "ngClass",
                    1 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    2 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    3 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    4 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("ngIf", 5 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 1 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 2 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 4 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 3 == t.reportType),
                  o["\u0275\u0275advance"](4),
                  o["\u0275\u0275property"]("data", t.data1)(
                    "customFilter",
                    t.customFilter
                  )("searchKeyword", t.keyword)("itemTemplate", e)(
                    "notFoundTemplate",
                    n
                  ),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"]("ngIf", t.items),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](20, Qn, t.tbody)
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("ngIf", t.items),
                  o["\u0275\u0275advance"](6),
                  o["\u0275\u0275property"]("ngIf", t.items),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"]("ngIf", t.items),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", t.deviceList);
              }
            },
            directives: [
              a.j,
              a.l,
              bt.a,
              b,
              a.m,
              yt.b,
              yt.e,
              Et.c,
              s.o,
              s.h,
              Et.k,
              s.b,
              s.n,
              s.f,
              Et.j,
              Et.h,
              yt.f,
              Et.d,
              Ct,
              Tt,
              Ft,
              s.r,
              s.y,
              a.k,
              Lt.c,
              Lt.d,
              Lt.b,
            ],
            styles: [
              ".my-btn[_ngcontent-%COMP%]{border:1px solid #f1f1f1;background:#fff;width:75;font-weight:400}.my-btn-selected[_ngcontent-%COMP%], .my-btn[_ngcontent-%COMP%]:hover{background-color:#96e1ff!important;color:#fff!important}.card1[_ngcontent-%COMP%]{border:1px solid #f1f1f1;align-items:center;text-align:center;padding:0!important;width:20%!important}.card1[_ngcontent-%COMP%], .card1-title[_ngcontent-%COMP%]{background-color:#fff;margin:0}.card1-title[_ngcontent-%COMP%]{color:#fff;font-size:15px;border-bottom:1px solid #f1f1f1;padding:10px 0;background-color:#96e1ff;width:100%}.current-data[_ngcontent-%COMP%]{font-size:24px;font-weight:bolder;margin:15px 0}.current-data[_ngcontent-%COMP%], .previous-data[_ngcontent-%COMP%]{background-color:#fff;width:100%}.previous-data[_ngcontent-%COMP%]{border-top:1px solid #f1f1f1;font-size:12px;margin:0;font-weight:700;padding:5px 0}.card-header[_ngcontent-%COMP%]{margin-bottom:0;background-color:#96e1ff;border-bottom:1px solid rgba(0,0,0,.125);border-left:none;border-right:none;color:#fff}.card-header[_ngcontent-%COMP%], .list-group-item[_ngcontent-%COMP%]{padding:.25rem 1.25rem;font-size:12px}.list-group-item[_ngcontent-%COMP%]{position:relative;display:block;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-right:none;border-left:none}.booking-no[_ngcontent-%COMP%]{color:#6495ed;font-size:20px;margin-left:5px}.divChart[_ngcontent-%COMP%]{display:block;height:300px!important;width:300px!important}.mat-form-field-underline[_ngcontent-%COMP%]{background-color:#96e1ff!important}  .mat-datepicker-toggle,   datepicker-value-example .mat-form-field-label{color:#96e1ff!important}  .mat-form-field-underline{background:#96e1ff!important}  .mat-focused .mat-form-field-label{color:#96e1ff!important} .mat-form-field-ripple,  .mat-form-field-underline{background-color:#96e1ff!important}[_ngcontent-%COMP%]::mat-datepicker-toggle,   .mat-form-field-label{color:#96e1ff!important}.ng-autocomplete[_ngcontent-%COMP%]{font-size:14px;margin-top:1px;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;line-height:40px;height:100%;padding:0;margin-bottom:0}.ng-autocomplete[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px}.card-md[_ngcontent-%COMP%]{overflow:scroll;height:2%!important}.search-header[_ngcontent-%COMP%]{text-decoration:none!important;cursor:text!important;background-color:#96e1ff!important;color:#fff!important}.cc-white[_ngcontent-%COMP%]{color:#fff}",
            ],
          })),
          e
        );
      })();
      var Un = n("i680"),
        Gn = n("Xa2L");
      let Kn = (() => {
        class e {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-progress-spinner-dialog"]],
            decls: 1,
            vars: 0,
            consts: [["color", "black"]],
            template: function (e, t) {
              1 & e && o["\u0275\u0275element"](0, "mat-spinner", 0);
            },
            directives: [Gn.b],
            styles: [
              ".mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], [_nghost-%COMP%]     .mat-progress-spinner circle{stroke:#96e1ff;background-color:initial!important}[_nghost-%COMP%]     mat-dialog-container{background-color:initial!important}",
            ],
          })),
          e
        );
      })();
      var Wn = n("0IaG"),
        Jn = n("NFeN"),
        Xn = n("e/mZ");
      const Zn = ["content"];
      function ea(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "mat-form-field", 27),
            o["\u0275\u0275elementStart"](1, "mat-label"),
            o["\u0275\u0275text"](2, "Choose a date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "input", 28),
            o["\u0275\u0275listener"]("dateChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().changeDayDate(t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](4, "mat-datepicker-toggle", 29),
            o["\u0275\u0275elementStart"](5, "mat-icon", 30),
            o["\u0275\u0275text"](6, "keyboard_arrow_down"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](7, "mat-datepicker", null, 31),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275reference"](8),
            t = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("formControl", t.dayDate)(
              "matDatepicker",
              e
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("for", e);
        }
      }
      function ta(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "mat-form-field", 32),
            o["\u0275\u0275elementStart"](1, "mat-label"),
            o["\u0275\u0275text"](2, "Enter a date range"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "mat-date-range-input", 33),
            o["\u0275\u0275elementStart"](4, "input", 34),
            o["\u0275\u0275listener"]("dateChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().startDate(t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "input", 35),
            o["\u0275\u0275listener"]("dateChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().endDate(t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](6, "mat-datepicker-toggle", 36),
            o["\u0275\u0275element"](7, "mat-date-range-picker", 37, 31),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275reference"](8),
            t = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("formGroup", t.range)("rangePicker", e),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("for", e);
        }
      }
      function na(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](
            0,
            "app-range-picker-with-custom-range",
            38
          ),
            o["\u0275\u0275listener"]("parentFun", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().loadDataDashBoard()
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function aa(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](
            0,
            "app-range-picker-with-custom-range-month-year",
            38
          ),
            o["\u0275\u0275listener"]("parentFun", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().loadDataDashBoard()
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function ra(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](
            0,
            "app-range-picker-with-custom-range-year",
            38
          ),
            o["\u0275\u0275listener"]("parentFun", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().loadDataDashBoard()
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function oa(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "select", 39),
            o["\u0275\u0275listener"]("change", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().selectQuarter(t)
              );
            }),
            o["\u0275\u0275elementStart"](1, "option", 40),
            o["\u0275\u0275text"](2, "January - March"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "option", 41),
            o["\u0275\u0275text"](4, "April - June"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "option", 42),
            o["\u0275\u0275text"](6, "July - September"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "option", 43),
            o["\u0275\u0275text"](8, "October - December"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function ia(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 18),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 46),
            o["\u0275\u0275text"](4, "Venue"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 47),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().selectedItemsVenue = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListVenue)(
              "ngModel",
              e.selectedItemsVenue
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function la(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 18),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 48),
            o["\u0275\u0275text"](4, "Venue Category"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 49),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().selectedItemsHotelCate = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListHotelCate)(
              "ngModel",
              e.selectedItemsHotelCate
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function da(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 51),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 52),
            o["\u0275\u0275text"](4, "Country"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 53),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"](2).selectedItemsCountry = t)
              );
            })("onSelect", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).onItemSelectSate(t)
              );
            })("onDeSelect", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).OnItemDeSelectSate(t)
              );
            })("onSelectAll", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).onSelectAllSate(t)
              );
            })("onDeSelectAll", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).onDeSelectAllSate(t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListCountry)(
              "ngModel",
              e.selectedItemsCountry
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function sa(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 18),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 54),
            o["\u0275\u0275text"](4, "State"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 55),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"](2).selectedItemsState = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListState)(
              "ngModel",
              e.selectedItemsState
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function ca(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 18),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 56),
            o["\u0275\u0275text"](4, "Device Id"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 57),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"](2).selectedItemsDevice = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListDevice)(
              "ngModel",
              e.selectedItemsDevice
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function ma(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 22),
            o["\u0275\u0275template"](1, da, 6, 3, "div", 50),
            o["\u0275\u0275template"](2, sa, 6, 3, "div", 23),
            o["\u0275\u0275template"](3, ca, 6, 3, "div", 23),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 1 == e.report),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 1 == e.report),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 1 == e.report);
        }
      }
      function pa(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 18),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 61),
            o["\u0275\u0275text"](4, "Dispatcher"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 62),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"](2).selectedItemsDispatcher = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListDispatcher)(
              "ngModel",
              e.selectedItemsDispatcher
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function ua(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 18),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 63),
            o["\u0275\u0275text"](4, "Status"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 64),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"](2).selectedItemsBookingStatus = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListBookingStatus)(
              "ngModel",
              e.selectedItemsBookingStatus
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function ga(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 58),
            o["\u0275\u0275elementStart"](1, "div", 18),
            o["\u0275\u0275elementStart"](2, "div", 44),
            o["\u0275\u0275elementStart"](3, "div", 45),
            o["\u0275\u0275elementStart"](4, "label", 59),
            o["\u0275\u0275text"](5, "Device Type"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](6, "angular2-multiselect", 60),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().selectedItemsDeviceType = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](7, pa, 6, 3, "div", 23),
            o["\u0275\u0275template"](8, ua, 6, 3, "div", 23),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275property"]("ngClass", 1 == e.report ? "mt-5" : ""),
            o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"]("data", e.dropdownListDeviceType)(
              "ngModel",
              e.selectedItemsDeviceType
            )("settings", e.dropdownSettingsTaxi),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 1 == e.report),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 1 == e.report);
        }
      }
      function ha(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 18),
            o["\u0275\u0275elementStart"](1, "div", 44),
            o["\u0275\u0275elementStart"](2, "div", 45),
            o["\u0275\u0275elementStart"](3, "label", 67),
            o["\u0275\u0275text"](4, "Device Setup Date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "angular2-multiselect", 68),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"](2).selectedItemsDeviceSetupDate =
                  t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("data", e.dropdownListDeviceSetupDate)(
              "ngModel",
              e.selectedItemsDeviceSetupDate
            )("settings", e.dropdownSettingsTaxi);
        }
      }
      function fa(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 22),
            o["\u0275\u0275elementStart"](1, "div", 18),
            o["\u0275\u0275elementStart"](2, "div", 44),
            o["\u0275\u0275elementStart"](3, "div", 45),
            o["\u0275\u0275elementStart"](4, "label", 65),
            o["\u0275\u0275text"](5, "Device Status"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](6, "angular2-multiselect", 66),
            o["\u0275\u0275listener"]("ngModelChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().selectedItemsDeviceStatus = t)
              );
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](7, ha, 6, 3, "div", 23),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"]("data", e.dropdownListDeviceStatus)(
              "ngModel",
              e.selectedItemsDeviceStatus
            )("settings", e.dropdownSettingsTaxi),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", 2 == e.report);
        }
      }
      function va(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 22),
            o["\u0275\u0275elementStart"](1, "div", 69),
            o["\u0275\u0275elementStart"](2, "button", 70),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().genrateReport(1)
              );
            }),
            o["\u0275\u0275text"](3, " Download As CVS "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](4, "button", 71),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().genrateReport(2)
              );
            }),
            o["\u0275\u0275text"](5, " Download As PDF "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function Sa(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275elementStart"](1, "td"),
            o["\u0275\u0275text"](2),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "td"),
            o["\u0275\u0275text"](4),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "td"),
            o["\u0275\u0275text"](6),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "td"),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "td"),
            o["\u0275\u0275text"](10),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "td"),
            o["\u0275\u0275text"](12),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "td"),
            o["\u0275\u0275text"](14),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "td"),
            o["\u0275\u0275text"](16),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](17, "td", 78),
            o["\u0275\u0275text"](18),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.sNo, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiName, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.venueName, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.venueCategory, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.deviceId, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.simNumber, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.status, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.setupDate, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.address, " ");
        }
      }
      function xa(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 72),
            o["\u0275\u0275elementStart"](1, "div", 73, 74),
            o["\u0275\u0275elementStart"](3, "table", 75),
            o["\u0275\u0275elementStart"](4, "thead"),
            o["\u0275\u0275elementStart"](5, "tr"),
            o["\u0275\u0275elementStart"](6, "th"),
            o["\u0275\u0275text"](7, "S.No. "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](8, "th"),
            o["\u0275\u0275text"](9, "Taxi"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](10, "th"),
            o["\u0275\u0275text"](11, "Venue"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](12, "th"),
            o["\u0275\u0275text"](13, "Venue Category"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](14, "th"),
            o["\u0275\u0275text"](15, "Device ID"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "th"),
            o["\u0275\u0275text"](17, "SIM number "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "th"),
            o["\u0275\u0275text"](19, "Status"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](20, "th"),
            o["\u0275\u0275text"](21, "Setup Date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "th", 76),
            o["\u0275\u0275text"](23, "Location"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](24, "tbody"),
            o["\u0275\u0275template"](25, Sa, 19, 9, "tr", 77),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](25),
            o["\u0275\u0275property"]("ngForOf", e.pdflist);
        }
      }
      function ba(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275elementStart"](1, "td"),
            o["\u0275\u0275text"](2),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "td"),
            o["\u0275\u0275text"](4),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "td"),
            o["\u0275\u0275text"](6),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "td"),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "td"),
            o["\u0275\u0275text"](10),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "td"),
            o["\u0275\u0275text"](12),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "td"),
            o["\u0275\u0275text"](14),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "td"),
            o["\u0275\u0275text"](16),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](17, "td"),
            o["\u0275\u0275text"](18),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](19, "td"),
            o["\u0275\u0275text"](20),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](21, "td"),
            o["\u0275\u0275text"](22),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](23, "td"),
            o["\u0275\u0275text"](24),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](25, "td"),
            o["\u0275\u0275text"](26),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](27, "td"),
            o["\u0275\u0275text"](28),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](29, "td"),
            o["\u0275\u0275text"](30),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.sNo, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiName, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.venueName, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.venueCategory, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.country, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.state, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.deviceId, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiType, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.dispatcher, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.bookingLocation, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.bookingStatus, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.bookingTime, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.bookingCompletionTime,
              " "
            ),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.bookingCancellationTime,
              " "
            ),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.bookingId, " ");
        }
      }
      function ya(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 72),
            o["\u0275\u0275elementStart"](1, "div", 73, 74),
            o["\u0275\u0275elementStart"](3, "table", 75),
            o["\u0275\u0275elementStart"](4, "thead"),
            o["\u0275\u0275elementStart"](5, "tr"),
            o["\u0275\u0275elementStart"](6, "th"),
            o["\u0275\u0275text"](7, "S.No. "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](8, "th"),
            o["\u0275\u0275text"](9, "Taxi"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](10, "th"),
            o["\u0275\u0275text"](11, "Venue"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](12, "th"),
            o["\u0275\u0275text"](13, "Venue Category"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](14, "th"),
            o["\u0275\u0275text"](15, "Country"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "th"),
            o["\u0275\u0275text"](17, "State"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "th"),
            o["\u0275\u0275text"](19, "Device ID"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](20, "th"),
            o["\u0275\u0275text"](21, "Type"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "th"),
            o["\u0275\u0275text"](23, "Dispatcher"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](24, "th"),
            o["\u0275\u0275text"](25, "Location (Booking)"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](26, "th"),
            o["\u0275\u0275text"](27, "Status"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](28, "th"),
            o["\u0275\u0275text"](29, "Booking Time"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](30, "th"),
            o["\u0275\u0275text"](31, "Booking Completion Time"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](32, "th"),
            o["\u0275\u0275text"](33, "Booking Cancellation Time"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](34, "th"),
            o["\u0275\u0275text"](35, "Booking ID"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](36, "tbody"),
            o["\u0275\u0275template"](37, ba, 31, 15, "tr", 77),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](37),
            o["\u0275\u0275property"]("ngForOf", e.pdflist);
        }
      }
      function Ea(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275elementStart"](1, "td"),
            o["\u0275\u0275text"](2),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "td"),
            o["\u0275\u0275text"](4),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "td"),
            o["\u0275\u0275text"](6),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "td"),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "td"),
            o["\u0275\u0275text"](10),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](11, "td"),
            o["\u0275\u0275elementStart"](12, "td"),
            o["\u0275\u0275text"](13),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](14, "td"),
            o["\u0275\u0275text"](15),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "td"),
            o["\u0275\u0275text"](17),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "td"),
            o["\u0275\u0275text"](19),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](20, "td"),
            o["\u0275\u0275text"](21),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "td"),
            o["\u0275\u0275text"](23),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.sNo, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiName, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiOwner, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiEmail, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiMobileNumber, " "),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275textInterpolate1"](" ", e.taxiContactPerson, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.taxiContactPersonMobile,
              " "
            ),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.venueName, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.venueCategory, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.venueContactPersonPerson,
              " "
            ),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](
              " ",
              e.venueContactPersonMobile,
              " "
            );
        }
      }
      function wa(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 72),
            o["\u0275\u0275elementStart"](1, "div", 73, 74),
            o["\u0275\u0275elementStart"](3, "table", 75),
            o["\u0275\u0275elementStart"](4, "thead"),
            o["\u0275\u0275elementStart"](5, "tr"),
            o["\u0275\u0275elementStart"](6, "th"),
            o["\u0275\u0275text"](7, "S.No. "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](8, "th"),
            o["\u0275\u0275text"](9, "Taxi"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](10, "th"),
            o["\u0275\u0275text"](11, "Taxi Owner"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](12, "th"),
            o["\u0275\u0275text"](13, "Email"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](14, "th"),
            o["\u0275\u0275text"](15, "Mobile Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](16, "th"),
            o["\u0275\u0275text"](17, "Contact Person"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "th"),
            o["\u0275\u0275text"](19, "Email ID"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](20, "th"),
            o["\u0275\u0275text"](21, "Mobile"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "th"),
            o["\u0275\u0275text"](23, "Venue "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](24, "th"),
            o["\u0275\u0275text"](25, "Venue Category "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](26, "th"),
            o["\u0275\u0275text"](27, "Contact Person"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](28, "th"),
            o["\u0275\u0275text"](29, "Mobile"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](30, "tbody"),
            o["\u0275\u0275template"](31, Ea, 24, 11, "tr", 77),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](31),
            o["\u0275\u0275property"]("ngForOf", e.pdflist);
        }
      }
      const Ca = function (e) {
        return { "max-height": e };
      };
      let _a = (() => {
        class e {
          constructor(e, t, n, a, r, o, i, l) {
            (this.dialog = e),
              (this.router = t),
              (this.propertiesService = n),
              (this.taxiService = a),
              (this.daterangeService = r),
              (this.dateAdapter = o),
              (this.datepipe = i),
              (this.commonService = l),
              (this.dropdownListTaxi = []),
              (this.selectedItemsTaxi = []),
              (this.dropdownListVenue = []),
              (this.selectedItemsVenue = []),
              (this.dropdownListHotelCate = []),
              (this.selectedItemsHotelCate = []),
              (this.dropdownListCountry = []),
              (this.selectedItemsCountry = []),
              (this.dropdownListDevice = []),
              (this.selectedItemsDevice = []),
              (this.dropdownListDeviceType = []),
              (this.selectedItemsDeviceType = []),
              (this.dropdownListDispatcher = []),
              (this.selectedItemsDispatcher = []),
              (this.dropdownListBookingStatus = []),
              (this.selectedItemsBookingStatus = []),
              (this.dropdownListDeviceStatus = [
                { id: 1, itemName: "Active" },
                { id: 2, itemName: "Inactive" },
                { id: 3, itemName: "Assigned" },
                { id: 4, itemName: "Unassigned" },
              ]),
              (this.selectedItemsDeviceStatus = []),
              (this.dropdownListDeviceSetupDate = []),
              (this.selectedItemsDeviceSetupDate = []),
              (this.dropdownListState = []),
              (this.selectedItemsState = []),
              (this.divshow = !1),
              (this.icon = {
                url: "assets/img/mobile.png",
                scaledSize: { width: 35, height: 50 },
              }),
              (this.lat = 51.678418),
              (this.lng = 7.809007),
              (this.reportType = 5),
              (this.report = 0),
              (this.ds = new Date()),
              (this.range = new s.g({
                start: new s.d(
                  new Date(this.ds.setDate(this.ds.getDate() - 6))
                ),
                end: new s.d(new Date()),
              })),
              (this.dayDate = new s.d(new Date())),
              (this.paiHotel = 10),
              (this.pieChartData = [10, 20, 30, 20, 50, 40, 5]),
              (this.barMakiData = [10, 20, 30, 40]),
              (this.barTaxiData = [15, 5, 25, 56]),
              (this.barLabelData = ["January", "February", "March", "April"]),
              (this.keyword = "name"),
              (this.data1 = []),
              (this.customFilter = function (e, t) {
                return e;
              }),
              this.dateAdapter.setLocale("en-GB");
          }
          ngOnInit() {
            this.gethoellist(),
              this.gethoelcategory(),
              this.getdevicelist(),
              this.gethoeCountries();
            var e = { id: "1", itemName: "Taxi" },
              t = { id: "2", itemName: "Maxi" };
            (this.dropdownListBookingStatus = [
              { id: 1, itemName: "Pending" },
              { id: 2, itemName: "Cancelled" },
              { id: 3, itemName: "Completed" },
              { id: 4, itemName: "Failed" },
            ]),
              setTimeout(() => {
                this.dropdownListDeviceType.push(e),
                  this.dropdownListDeviceType.push(t);
              }, 1e3),
              (this.dropdownListDispatcher = [
                { id: 1, itemName: "Smartmove" },
                { id: 2, itemName: "MTI" },
              ]),
              (this.dropdownSettingsTaxi = {
                singleSelection: !1,
                text: "Please Select",
                selectAllText: "Select All",
                unSelectAllText: "UnSelect All",
                enableSearchFilter: !0,
                autoPosition: !1,
              }),
              (this.dropdownSettings = {
                singleSelection: !1,
                text: "Select Countries",
                selectAllText: "Select All",
                unSelectAllText: "UnSelect All",
                enableSearchFilter: !0,
                autoPosition: !1,
              }),
              this.reSetDates(),
              this.getdevicelist(),
              (this.tbody = this.propertiesService.tbody);
          }
          onItemSelectTaxi(e) {
            this.selectTaxiVenue();
          }
          onSelectAllTaxi(e) {
            this.selectTaxiVenue();
          }
          OnItemDeSelectTaxi(e) {
            this.selectTaxiVenue();
          }
          onDeSelectAllTaxi(e) {
            this.selectTaxiVenue();
          }
          onItemSelectSate(e) {
            this.gethoeStates();
          }
          onSelectAllSate(e) {
            this.gethoeStates();
          }
          OnItemDeSelectSate(e) {
            this.gethoeStates();
          }
          onDeSelectAllSate(e) {
            this.gethoeStates();
          }
          Sorting(e) {
            return e.sort(function (e, t) {
              var n = e.name.toUpperCase(),
                a = t.name.toUpperCase();
              return n < a ? -1 : n > a ? 1 : 0;
            });
          }
          gethoellist() {
            this.taxiService.gethotellist().subscribe(
              (e) => {
                const t = this.Sorting(e.data);
                (this.VenueList = t),
                  (this.dropdownListVenue = []),
                  t.forEach((e) => {
                    this.dropdownListVenue.push({
                      id: e._id,
                      itemName: e.name,
                    });
                  });
              },
              (e) => {}
            ),
              console.log("element data"),
              console.log(this.dropdownListTaxi);
          }
          getdevicelist() {
            this.taxiService.getdevicelist().subscribe(
              (e) => {
                const t = e.data;
                var n = t.sort(function (e, t) {
                  var n = e.serial_number.toUpperCase(),
                    a = t.serial_number.toUpperCase();
                  return n < a ? -1 : n > a ? 1 : 0;
                });
                (this.dropdownListDevice = []),
                  (this.dropdownListDeviceSetupDate = []),
                  console.log("device data"),
                  console.log(t),
                  (n = t.sort(function (e, t) {
                    var n = e.created_at,
                      a = t.created_at;
                    return n < a ? -1 : n > a ? 1 : 0;
                  })),
                  t.forEach((e) => {
                    this.dropdownListDevice.push({
                      id: e._id,
                      itemName: e.serial_number,
                    });
                  }),
                  n.forEach((e) => {
                    let t = new Date(e.created_at),
                      n = this.datepipe.transform(t, "dd-MM-yyyy");
                    this.dropdownListDeviceSetupDate.push({
                      id: e.created_at,
                      itemName: n,
                    });
                  });
              },
              (e) => {}
            ),
              console.log("element data"),
              console.log(this.dropdownListTaxi);
          }
          gethoelcategory() {
            this.taxiService.getCategoriesList().subscribe(
              (e) => {
                const t = this.Sorting(e.data);
                (this.dropdownListHotelCate = []),
                  t.forEach((e) => {
                    this.dropdownListHotelCate.push({
                      id: e._id,
                      itemName: e.name,
                    });
                  });
              },
              (e) => {}
            ),
              console.log("element data"),
              console.log(this.dropdownListTaxi);
          }
          gethoeStates() {
            let e = [];
            this.selectedItemsCountry.forEach((t) => {
              e.push(t.itemName);
            }),
              this.taxiService.getSates({ country: e }).subscribe(
                (e) => {
                  const t = e.data;
                  (this.dropdownListState = []),
                    t.forEach((e) => {
                      this.dropdownListState.push({ id: e, itemName: e });
                    });
                },
                (e) => {}
              ),
              console.log("element data"),
              console.log(this.dropdownListTaxi);
          }
          gethoeCountries() {
            this.taxiService.getCountries().subscribe(
              (e) => {
                const t = this.Sorting(e.data);
                (this.dropdownListCountry = []),
                  (this.selectedItemsCountry = []),
                  t.forEach((e) => {
                    console.log(e.name),
                      "Australia" == e.name &&
                        (console.log("yes.............................."),
                        this.selectedItemsCountry.push({
                          id: e.name,
                          itemName: e.name,
                        })),
                      this.dropdownListCountry.push({
                        id: e.name,
                        itemName: e.name,
                      }),
                      this.gethoeStates();
                  });
              },
              (e) => {}
            ),
              console.log("element data"),
              console.log(this.dropdownListTaxi);
          }
          routeToTakiPage() {
            this.router.navigate(["admin/dashboard"]);
          }
          selectEvent(e) {
            this.viewDetail(e.id, e.type);
          }
          viewDetail(e, t) {
            console.log("view detiaed called"),
              console.log(t),
              t > 0 &&
                this.router.navigate(
                  1 == t ? ["admin/taxi-add/" + e] : ["admin/hotel-add/" + e]
                );
          }
          onFocused(e) {}
          getMonday() {
            var e = new Date(),
              t = e.getDay(),
              n = e.getDate() - t + (0 == t ? -6 : 1);
            return new Date(e.setDate(n));
          }
          selectReportType(e) {
            if (this.reportType == e) (this.reportType = 5), this.reSetDates();
            else if (((this.reportType = e), 1 == this.reportType)) {
              var t = this.getMonday(),
                n = new Date(t),
                a = new Date(n.setDate(n.getDate() + 6));
              (this.daterangeService.rstartDate = t),
                (this.daterangeService.rendDate = a);
            } else if (2 == this.reportType) {
              var r = new Date(),
                o = r.getFullYear(),
                i = r.getMonth(),
                l = new Date(o, i, 1),
                d = new Date(o, i + 1, 0);
              (this.daterangeService.rstartDate = l),
                (this.daterangeService.rendDate = d);
            } else
              3 == this.reportType
                ? this.getLastDayAndStartDayofQuarter(0)
                : 4 == this.reportType
                ? ((this.daterangeService.rstartDate = new Date(
                    new Date().getFullYear(),
                    0,
                    1
                  )),
                  (this.daterangeService.rendDate = new Date(
                    new Date().getFullYear(),
                    11,
                    31
                  )))
                : 6 == this.reportType &&
                  ((this.daterangeService.rstartDate = new Date()),
                  (this.daterangeService.rendDate = new Date()));
          }
          selectReport(e) {
            (this.report = this.report == e ? 0 : e), this.resetState();
          }
          selectQuarter(e) {
            const t = e.target.value;
            t &&
              (1 == t
                ? this.getLastDayAndStartDayofQuarter(0)
                : 2 == t && this.getLastDayAndStartDayofQuarter(3),
              3 == t && this.getLastDayAndStartDayofQuarter(6),
              4 == t && this.getLastDayAndStartDayofQuarter(9));
          }
          getLastDayAndStartDayofQuarter(e) {
            var t = new Date(new Date().getFullYear(), e, 1),
              n = new Date(t),
              a = new Date(t.setMonth(t.getMonth() + 2)),
              r = new Date(a),
              o = r.getFullYear(),
              i = r.getMonth(),
              l = new Date(o, i + 1, 0);
            (this.daterangeService.rstartDate = n),
              (this.daterangeService.rendDate = l);
          }
          reSetDates() {
            var e = new Date();
            (this.daterangeService.rendDate = new Date()),
              (this.daterangeService.rstartDate = new Date(
                e.setDate(e.getDate() - 6)
              ));
          }
          startDate(e) {
            this.daterangeService.rstartDate = e.value;
          }
          endDate(e) {
            this.daterangeService.rendDate = e.value;
          }
          changeDayDate(e) {
            (this.daterangeService.rstartDate = e.value),
              (this.daterangeService.rendDate = e.value);
          }
          loadDataDashBoard() {}
          resetState() {
            (this.selectedItemsTaxi = []),
              (this.selectedItemsVenue = []),
              (this.selectedItemsHotelCate = []),
              (this.selectedItemsDevice = []),
              (this.selectedItemsDeviceType = []),
              (this.selectedItemsDispatcher = []),
              (this.selectedItemsBookingStatus = []),
              (this.selectedItemsDeviceStatus = []),
              (this.selectedItemsDeviceSetupDate = []),
              (this.selectedItemsState = []);
          }
          genrateReport(e) {
            var t = new Date(this.daterangeService.rstartDate),
              n = new Date(this.daterangeService.rendDate);
            console.log(t), console.log(n);
            const a =
                t.getFullYear().toString() +
                "-" +
                (t.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                t.getDate().toString().padStart(2, "0"),
              r =
                n.getFullYear().toString() +
                "-" +
                (n.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                n.getDate().toString().padStart(2, "0");
            t.getFullYear().toString(),
              console.log(a),
              console.log(r),
              console.log("selected Taxi Id");
            let o = [],
              i = [],
              l = [],
              d = [],
              s = [],
              c = [],
              m = [],
              p = [],
              u = [],
              g = [];
            this.selectedItemsTaxi.forEach((e) => {
              o.push(e.id);
            }),
              this.selectedItemsVenue.forEach((e) => {
                i.push(e.id);
              }),
              this.selectedItemsHotelCate.forEach((e) => {
                l.push(e.id);
              }),
              this.selectedItemsDeviceStatus.forEach((e) => {
                d.push(e.id);
              }),
              this.selectedItemsCountry.forEach((e) => {
                s.push(e.id);
              }),
              this.selectedItemsState.forEach((e) => {
                c.push(e.id);
              }),
              this.selectedItemsDevice.forEach((e) => {
                m.push(e.id);
              }),
              this.selectedItemsDeviceType.forEach((e) => {
                p.push(+e.id);
              }),
              this.selectedItemsDispatcher.forEach((e) => {
                u.push(e.id);
              }),
              this.selectedItemsBookingStatus.forEach((e) => {
                g.push(e.id);
              });
            var h = localStorage.getItem("userId");
            let f;
            console.log(o),
              3 == this.report
                ? (f = {
                    report_type: this.report,
                    taxi_id: h,
                    hotel_id: i,
                    hotel_category_id: l,
                    start_date: a,
                    end_date: r,
                  })
                : 2 == this.report
                ? (f = {
                    report_type: 2,
                    taxi_id: h,
                    start_date: a,
                    end_date: r,
                    hotel_id: i,
                    hotel_category_id: l,
                    status: d,
                    setup_date: null,
                  })
                : 1 == this.report &&
                  (f = {
                    report_type: 1,
                    start_date: a,
                    end_date: r,
                    country: s,
                    state: c,
                    taxi_id: h,
                    hotel_id: i,
                    hotel_category_id: l,
                    device_id: m,
                    taxi_type: p,
                    dispatcher: u,
                    status: g,
                  }),
              this.showProgressSpinnerUntilExecuted(f, e);
          }
          selectTaxiVenue() {
            (this.dropdownListVenue = []),
              (this.selectedItemsVenue = []),
              this.VenueList.forEach(
                this.selectedItemsTaxi.length > 0
                  ? (e) => {
                      this.selectedItemsTaxi.find(
                        (t) => t.id == e.taxi_id._id
                      ) &&
                        this.dropdownListVenue.push({
                          id: e._id,
                          itemName: e.name,
                        });
                    }
                  : (e) => {
                      this.dropdownListVenue.push({
                        id: e._id,
                        itemName: e.name,
                      });
                    }
              );
          }
          CreatePDF(e) {
            let t;
            1 == this.report
              ? (t = new Un.a("l", "pt", "legal"))
              : 2 == this.report
              ? (t = new Un.a("l", "pt", "a4"))
              : 3 == this.report && (t = new Un.a("l", "pt", "legal")),
              t.setFontSize(6),
              t.html(this.el.nativeElement, {
                callback: (t) => {
                  t.save("KC_Reports.pdf"), (this.divshow = !1), e.close();
                },
              });
          }
          showProgressSpinnerUntilExecuted(e, t) {
            let n = this.dialog.open(Kn, {
              panelClass: "transparent",
              disableClose: !0,
            });
            this.taxiService.getAdminReports(e).subscribe(
              (e) => {
                const a = e.data;
                console.log("data from reposnse"),
                  console.log(a),
                  a && a.length > 0
                    ? 1 == t
                      ? (this.daterangeService.downloadFile(
                          a,
                          "KC-Report",
                          this.report
                        ),
                        n.close())
                      : ((this.pdflist = a),
                        (this.divshow = !0),
                        setTimeout(() => {
                          this.CreatePDF(n);
                        }, 5e3))
                    : (this.commonService.toast("No data found.", "Error"),
                      n.close());
              },
              (e) => {}
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](Wn.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](d.a),
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](St.a),
              o["\u0275\u0275directiveInject"](xt.a),
              o["\u0275\u0275directiveInject"](a.d),
              o["\u0275\u0275directiveInject"](l.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-reprots"]],
            viewQuery: function (e, t) {
              if ((1 & e && o["\u0275\u0275viewQuery"](Zn, 1), 2 & e)) {
                let e;
                o["\u0275\u0275queryRefresh"](
                  (e = o["\u0275\u0275loadQuery"]())
                ) && (t.el = e.first);
              }
            },
            decls: 53,
            vars: 26,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-4", "offset-md-1"],
              [1, "col-wrapper", "mt-4", "mb-4", "text-left"],
              [1, "col-md-4", "mt-4"],
              ["role", "group", 1, "btn-group"],
              ["type", "button", 1, "btn", "my-btn", 3, "ngClass", "click"],
              [1, "col-md-3", "mt-4"],
              ["class", "example-full-width", "appearance", "fill", 4, "ngIf"],
              ["appearance", "fill", 4, "ngIf"],
              [3, "parentFun", 4, "ngIf"],
              [
                "style",
                "width: 80%;",
                "class",
                "m-w my-select mt-2 form-control",
                3,
                "change",
                4,
                "ngIf",
              ],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-lg-2", "col-md-3"],
              [
                1,
                "col-lg-10",
                "col-md-9",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "col-md-4"],
              [1, "col-wrapper", "mt-4", "pt-1", "text-left"],
              [
                "type",
                "button",
                1,
                "btn",
                "my-btn",
                "my-btn-long",
                3,
                "ngClass",
                "click",
              ],
              [1, "main-content-wrapper"],
              [1, "row", "mt-5"],
              ["class", "col-md-4", 4, "ngIf"],
              ["class", "row mt-5", 4, "ngIf"],
              ["class", "row", 3, "ngClass", 4, "ngIf"],
              ["style", "margin-top: 600px;", 4, "ngIf"],
              ["appearance", "fill", 1, "example-full-width"],
              ["matInput", "", 3, "formControl", "matDatepicker", "dateChange"],
              ["matSuffix", "", 3, "for"],
              ["matDatepickerToggleIcon", ""],
              ["picker", ""],
              ["appearance", "fill"],
              ["fill", "green", 3, "formGroup", "rangePicker"],
              [
                "matStartDate",
                "",
                "formControlName",
                "start",
                "matStartDate",
                "",
                "placeholder",
                "Start date",
                3,
                "dateChange",
              ],
              [
                "matEndDate",
                "",
                "formControlName",
                "end",
                "matEndDate",
                "",
                "placeholder",
                "End date",
                3,
                "dateChange",
              ],
              ["fill", "green", "matSuffix", "", 3, "for"],
              ["color", "primary"],
              [3, "parentFun"],
              [
                1,
                "m-w",
                "my-select",
                "mt-2",
                "form-control",
                2,
                "width",
                "80%",
                3,
                "change",
              ],
              ["selected", "", "value", "1"],
              ["value", "2"],
              ["value", "3"],
              ["value", "4"],
              [1, "container-fluid"],
              [1, "form-group"],
              ["for", "tavi"],
              [
                "name",
                "hotel",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              ["for", "hotelCate"],
              [
                "name",
                "hotelCate",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              ["class", "col-md-4 ng", 4, "ngIf"],
              [1, "col-md-4", "ng"],
              ["for", "country"],
              [
                "name",
                "country",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
                "onSelect",
                "onDeSelect",
                "onSelectAll",
                "onDeSelectAll",
              ],
              ["for", "state"],
              [
                "name",
                "state",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              ["for", "devices"],
              [
                "name",
                "devices",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              [1, "row", 3, "ngClass"],
              ["for", "deviceType"],
              [
                "name",
                "deviceType",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              ["for", "Dispatcher"],
              [
                "name",
                "Dispatcher",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              ["for", "deviceStatus"],
              [
                "name",
                "deviceStatus",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              ["for", "DeviceStatus"],
              [
                "name",
                "DeviceStatus",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              ["for", "DeviceSetupDate"],
              [
                "name",
                "DeviceSetupDate",
                3,
                "data",
                "ngModel",
                "settings",
                "ngModelChange",
              ],
              [1, "col-md-12", "text-center"],
              ["type", "button", 1, "btn", "btn-primary", "mr-5", 3, "click"],
              ["type", "button", 1, "btn", "btn-primary", 3, "click"],
              [2, "margin-top", "600px"],
              ["id", "content", 1, ""],
              ["content", ""],
              [1, ""],
              [2, "max-width", "110px"],
              [4, "ngFor", "ngForOf"],
              [2, "max-width", "110px", "word-wrap", "break-word !important"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "div", 5),
                o["\u0275\u0275elementStart"](6, "h2"),
                o["\u0275\u0275text"](7, "Reports"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 6),
                o["\u0275\u0275elementStart"](9, "div", 7),
                o["\u0275\u0275elementStart"](10, "button", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReportType(6);
                }),
                o["\u0275\u0275text"](11, "Day"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](12, "button", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReportType(1);
                }),
                o["\u0275\u0275text"](13, "Week"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](14, "button", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReportType(2);
                }),
                o["\u0275\u0275text"](15, "Month"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](16, "button", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReportType(3);
                }),
                o["\u0275\u0275text"](17, "Quarter"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](18, "button", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReportType(4);
                }),
                o["\u0275\u0275text"](19, "Year"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](20, "div", 9),
                o["\u0275\u0275template"](21, ea, 9, 3, "mat-form-field", 10),
                o["\u0275\u0275template"](22, ta, 9, 3, "mat-form-field", 11),
                o["\u0275\u0275template"](
                  23,
                  na,
                  1,
                  0,
                  "app-range-picker-with-custom-range",
                  12
                ),
                o["\u0275\u0275template"](
                  24,
                  aa,
                  1,
                  0,
                  "app-range-picker-with-custom-range-month-year",
                  12
                ),
                o["\u0275\u0275template"](
                  25,
                  ra,
                  1,
                  0,
                  "app-range-picker-with-custom-range-year",
                  12
                ),
                o["\u0275\u0275template"](26, oa, 9, 0, "select", 13),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](27, "div", 14),
                o["\u0275\u0275elementStart"](28, "div", 15),
                o["\u0275\u0275elementStart"](29, "div", 16),
                o["\u0275\u0275element"](30, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](31, "div", 17),
                o["\u0275\u0275elementStart"](32, "div", 3),
                o["\u0275\u0275elementStart"](33, "div", 18),
                o["\u0275\u0275elementStart"](34, "div", 19),
                o["\u0275\u0275elementStart"](35, "div", 7),
                o["\u0275\u0275elementStart"](36, "button", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReport(1);
                }),
                o["\u0275\u0275text"](37, "Bookings"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](38, "button", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReport(2);
                }),
                o["\u0275\u0275text"](39, "Devices"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](40, "button", 20),
                o["\u0275\u0275listener"]("click", function () {
                  return t.selectReport(3);
                }),
                o["\u0275\u0275text"](41, "Taxi/Venue"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](42, "div", 21),
                o["\u0275\u0275elementStart"](43, "div", 22),
                o["\u0275\u0275template"](44, ia, 6, 3, "div", 23),
                o["\u0275\u0275template"](45, la, 6, 3, "div", 23),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275template"](46, ma, 4, 3, "div", 24),
                o["\u0275\u0275template"](47, ga, 9, 6, "div", 25),
                o["\u0275\u0275template"](48, fa, 8, 4, "div", 24),
                o["\u0275\u0275template"](49, va, 6, 0, "div", 24),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275template"](50, xa, 26, 1, "div", 26),
                o["\u0275\u0275template"](51, ya, 38, 1, "div", 26),
                o["\u0275\u0275template"](52, wa, 32, 1, "div", 26),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](10),
                  o["\u0275\u0275property"](
                    "ngClass",
                    6 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    1 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    2 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    3 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    4 == t.reportType ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("ngIf", 6 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 5 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 1 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 2 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 4 == t.reportType),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 3 == t.reportType),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](24, Ca, t.tbody)
                  ),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngClass",
                    1 == t.report ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    2 == t.report ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](2),
                  o["\u0275\u0275property"](
                    "ngClass",
                    3 == t.report ? "my-btn-selected" : ""
                  ),
                  o["\u0275\u0275advance"](4),
                  o["\u0275\u0275property"]("ngIf", 0 != t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 0 != t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 1 == t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 1 == t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 2 == t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 0 != t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 2 == t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 1 == t.report),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", 3 == t.report));
            },
            directives: [
              a.j,
              a.l,
              b,
              a.m,
              yt.b,
              yt.e,
              Dt.b,
              s.b,
              Et.f,
              s.n,
              s.e,
              Et.h,
              yt.f,
              Jn.a,
              Et.i,
              Et.e,
              Et.c,
              s.o,
              s.h,
              Et.k,
              s.f,
              Et.j,
              Et.d,
              Ct,
              Tt,
              Ft,
              s.r,
              s.y,
              Xn.a,
              s.q,
              a.k,
            ],
            styles: [
              ".my-btn[_ngcontent-%COMP%]{width:75}.my-btn[_ngcontent-%COMP%], .my-btn-long[_ngcontent-%COMP%]{border:1px solid #f1f1f1;background:#fff;font-weight:400}.my-btn-long[_ngcontent-%COMP%]{width:110px}.my-btn-selected[_ngcontent-%COMP%], .my-btn[_ngcontent-%COMP%]:hover{background-color:#96e1ff!important;color:#fff!important}.card1[_ngcontent-%COMP%]{border:1px solid #f1f1f1;align-items:center;text-align:center;padding:0!important;width:20%!important}.card1[_ngcontent-%COMP%], .card1-title[_ngcontent-%COMP%]{background-color:#fff;margin:0}.card1-title[_ngcontent-%COMP%]{color:#fff;font-size:15px;border-bottom:1px solid #f1f1f1;padding:10px 0;background-color:#96e1ff;width:100%}.current-data[_ngcontent-%COMP%]{font-size:24px;font-weight:bolder;margin:15px 0}.current-data[_ngcontent-%COMP%], .previous-data[_ngcontent-%COMP%]{background-color:#fff;width:100%}.previous-data[_ngcontent-%COMP%]{border-top:1px solid #f1f1f1;font-size:12px;margin:0;font-weight:700;padding:5px 0}.card-header[_ngcontent-%COMP%]{margin-bottom:0;background-color:#96e1ff;border-bottom:1px solid rgba(0,0,0,.125);border-left:none;border-right:none;color:#fff}.card-header[_ngcontent-%COMP%], .list-group-item[_ngcontent-%COMP%]{padding:.25rem 1.25rem;font-size:12px}.list-group-item[_ngcontent-%COMP%]{position:relative;display:block;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-right:none;border-left:none}.booking-no[_ngcontent-%COMP%]{color:#6495ed;font-size:20px;margin-left:5px}.divChart[_ngcontent-%COMP%]{display:block;height:300px!important;width:300px!important} .mat-form-field-ripple,  .mat-form-field-underline{background-color:#96e1ff!important}[_ngcontent-%COMP%]::mat-datepicker-toggle,   .mat-form-field-label{color:#96e1ff!important}.ng-autocomplete[_ngcontent-%COMP%]{font-size:14px;margin-top:1px;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;line-height:40px;height:100%;padding:0;margin-bottom:0}.ng-autocomplete[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px}.card-md[_ngcontent-%COMP%]{overflow:scroll;height:2%!important}.search-header[_ngcontent-%COMP%]{text-decoration:none!important;cursor:text!important;background-color:#96e1ff!important;color:#fff!important}.cc-white[_ngcontent-%COMP%]{color:#fff}multiselect-item-checkbox[_ngcontent-%COMP%]{background-color:#96e1ff!important}[_nghost-%COMP%]     .multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-size:12px;font-weight:400;line-height:1.1;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}[_nghost-%COMP%]     .selected-item{background-color:#96e1ff!important;color:#fff!important;border:1px solid #6fc9ec!important}[_nghost-%COMP%]     .selected-item span{color:#fff!important;font-size:medium!important}[_nghost-%COMP%]     .selected-item:hover{box-shadow:1px 1px #6fc9ec!important}[_nghost-%COMP%]     .multiselect-item-checkbox input{background-color:#96e1ff!important;border:1px solid #6fc9ec!important}[_nghost-%COMP%]     .mat-toolbar{background:#fff}[_nghost-%COMP%]     .c-btn{background:#fff;border:1px solid #ccc;color:#333}[_nghost-%COMP%]     .selected-list .c-list .c-token{background-image:-webkit-linear-gradient(#e4a22f,#d8762d)}[_nghost-%COMP%]     .selected-list .c-list .c-token .c-label{color:#fff}[_nghost-%COMP%]     .selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list[_ngcontent-%COMP%]   .c-angle-up[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], [_nghost-%COMP%]     .selected-list .c-angle-down svg{fill:#333}[_nghost-%COMP%]     .dropdown-list ul li:hover{background:#f5f5f5}.arrow-down[_ngcontent-%COMP%], [_nghost-%COMP%]     .arrow-up{border-bottom:15px solid #fff}[_nghost-%COMP%]     .arrow-2{border-bottom:15px solid #ccc}[_nghost-%COMP%]     .list-area{border:1px solid #ccc;background:#fff;box-shadow:0 1px 5px #959595}[_nghost-%COMP%]     .list-filter, [_nghost-%COMP%]     .select-all{border-bottom:1px solid #ccc}[_nghost-%COMP%]     .list-filter .c-clear svg, [_nghost-%COMP%]     .list-filter .c-search svg{fill:#888}.pure-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + label[_ngcontent-%COMP%]:before, [_nghost-%COMP%]     .pure-checkbox input[type=checkbox]:focus+label:before{border-color:#96e1ff;background-color:#f2f2f2}[_nghost-%COMP%]     .pure-checkbox input[type=checkbox]+label{color:#000}[_nghost-%COMP%]     .pure-checkbox input[type=checkbox]+label:before{color:#0079fe;border:1px solid #0079fe}[_nghost-%COMP%]     .pure-checkbox input[type=checkbox]+label:after{background-color:#0079fe}[_nghost-%COMP%]     .pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}[_nghost-%COMP%]     .pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}[_nghost-%COMP%]     .pure-checkbox input[type=checkbox]+label:after{border-color:#fff}[_nghost-%COMP%]     .pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}[_nghost-%COMP%]     .pure-checkbox input[type=checkbox]:checked+label:before{background:#0079fe}.single-select-mode[_ngcontent-%COMP%]   .pure-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + label[_ngcontent-%COMP%]:before, [_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]:focus+label:before{border-color:#0079fe;background-color:#f2f2f2}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]+label{color:#000}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]+label:before{color:transparent!important;border:0 solid #0079fe}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]+label:after{background-color:initial!important}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]+label:after{border-color:#0079fe}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}[_nghost-%COMP%]     .single-select-mode .pure-checkbox input[type=checkbox]:checked+label:before{background:none!important}[_nghost-%COMP%]     .selected-item{background:#e9f4ff}[_nghost-%COMP%]     .btn-iceblue{background:#0079fe;border:1px solid #ccc;color:#fff}label[_ngcontent-%COMP%]{background-color:#96e1ff;color:#fff;width:50%;height:40px;font-size:larger;display:grid;align-items:center;padding-left:5px}#content[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{text-align:center}#content[_ngcontent-%COMP%]{font-size:xx-small}table[_ngcontent-%COMP%]{max-width:2480px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:auto;max-width:210px;overflow:hidden;word-wrap:break-word;border:1px solid grey}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#96e1ff!important;color:#fff!important;background-image:none}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid grey}th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff!important}",
            ],
          })),
          e
        );
      })();
      function Ia(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "p", 33),
          o["\u0275\u0275text"](1, "No Device added yet."),
          o["\u0275\u0275elementEnd"]());
      }
      const ka = function (e) {
        return [e];
      };
      function Da(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "tr"),
            o["\u0275\u0275elementStart"](1, "td", 39),
            o["\u0275\u0275text"](2, " 1 "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](3, "td", 39),
            o["\u0275\u0275text"](4),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "td", 39),
            o["\u0275\u0275text"](6),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "td", 39),
            o["\u0275\u0275text"](8),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "td", 39),
            o["\u0275\u0275text"](10),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "td", 39),
            o["\u0275\u0275elementStart"](12, "label", 40),
            o["\u0275\u0275elementStart"](13, "input", 41),
            o["\u0275\u0275listener"]("change", function (n) {
              o["\u0275\u0275restoreView"](e);
              const a = t.$implicit;
              return o["\u0275\u0275nextContext"](3).changeStatus(a._id, n);
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](14, "span", 42),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "td", 43),
            o["\u0275\u0275elementStart"](16, "div", 44),
            o["\u0275\u0275elementStart"](17, "button", 45),
            o["\u0275\u0275element"](18, "i", 46),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](19, "div", 47),
            o["\u0275\u0275elementStart"](20, "a", 48),
            o["\u0275\u0275listener"]("click", function () {
              o["\u0275\u0275restoreView"](e);
              const n = t.$implicit;
              return o["\u0275\u0275nextContext"](3).genrateToken(n._id);
            }),
            o["\u0275\u0275text"](21, "Generate Key"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](22, "a", 49),
            o["\u0275\u0275text"](23, "Edit"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](24, "input", 50),
            o["\u0275\u0275listener"]("click", function () {
              o["\u0275\u0275restoreView"](e);
              const n = t.$implicit;
              return o["\u0275\u0275nextContext"](3).saveid(n._id);
            }),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = t.$implicit;
          o["\u0275\u0275advance"](4),
            o["\u0275\u0275textInterpolate1"](" ", e.name, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.email, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.role, " "),
            o["\u0275\u0275advance"](2),
            o["\u0275\u0275textInterpolate1"](" ", e.phone, " "),
            o["\u0275\u0275advance"](3),
            o["\u0275\u0275property"]("checked", e.is_active),
            o["\u0275\u0275advance"](9),
            o["\u0275\u0275property"](
              "routerLink",
              o["\u0275\u0275pureFunction1"](6, ka, "/taxi/user-add/" + e._id)
            );
        }
      }
      const Ma = function (e) {
          return { "max-height": e };
        },
        Pa = function (e) {
          return { itemsPerPage: 10, currentPage: e };
        };
      function Ta(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "table", 36),
            o["\u0275\u0275elementStart"](1, "thead"),
            o["\u0275\u0275elementStart"](2, "tr"),
            o["\u0275\u0275elementStart"](3, "th", 37),
            o["\u0275\u0275text"](4, "S. No."),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "th", 37),
            o["\u0275\u0275text"](6, "Name"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "th", 37),
            o["\u0275\u0275text"](8, "Email ID"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "th", 37),
            o["\u0275\u0275text"](10, "Role"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "th", 37),
            o["\u0275\u0275text"](12, "Phone Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "th", 37),
            o["\u0275\u0275text"](14, "Status"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](15, "th", 37),
            o["\u0275\u0275text"](16, "Operation"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](17, "tbody"),
            o["\u0275\u0275template"](18, Da, 25, 8, "tr", 38),
            o["\u0275\u0275pipe"](19, "paginate"),
            o["\u0275\u0275pipe"](20, "filter"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275property"](
            "ngStyle",
            o["\u0275\u0275pureFunction1"](8, Ma, e.tbody)
          ),
            o["\u0275\u0275advance"](18),
            o["\u0275\u0275property"](
              "ngForOf",
              o["\u0275\u0275pipeBind2"](
                19,
                2,
                o["\u0275\u0275pipeBind2"](20, 5, e.items, e.searchText),
                o["\u0275\u0275pureFunction1"](10, Pa, e.p)
              )
            );
        }
      }
      function Oa(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 34),
            o["\u0275\u0275template"](1, Ta, 21, 12, "table", 35),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.loader);
        }
      }
      function Va(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "pagination-controls", 51),
            o["\u0275\u0275listener"]("pageChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().p = t)
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      let Fa = (() => {
        class e {
          constructor(e, t, n, a, r) {
            (this.taxiService = e),
              (this.commonService = t),
              (this.router = n),
              (this.activatedRoute = a),
              (this.propertiesService = r),
              (this.p = 1),
              (this.password = ""),
              (this.encriptedPasswrod = ""),
              (this.nodata = !1);
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.tbody),
              this.getUsersforlist(),
              (this.loader = !0);
          }
          changeStatus(e, t) {
            const n = t.target.checked;
            console.log(n),
              this.taxiService.updateUserStatus(e, { status: n }).subscribe(
                (e) => {
                  this.commonService.toast(
                    "Status updated Successfully",
                    "Success"
                  ),
                    this.getUsersforlist();
                },
                (e) => {
                  this.commonService.toast(e.error.message, "Error");
                }
              );
          }
          getUsersforlist() {
            this.taxiService.getUsers().subscribe(
              (e) => {
                const t = e.data;
                (this.items = t), console.log(t), (this.loader = !1);
              },
              (e) => {
                this.loader = !1;
              }
            );
          }
          getdevicelist() {
            this.taxiService.getdevicelist().subscribe(
              (e) => {
                var t = [];
                e.data.forEach((e, n) => {
                  let a = new ye.a();
                  (a.adname = e.adname),
                    (a.created_at = e.created_at),
                    (a.hotel_id = e.hotel_id),
                    (a.is_active = e.is_active),
                    (a.is_login = e.is_login),
                    (a.password = e.password),
                    (a.plain_password = e.plain_password),
                    (a.serial_number = e.serial_number),
                    (a.sim_number = e.sim_number),
                    (a.taxi_id = e.taxi_id),
                    (a.updated_at = e.updated_at),
                    (a.positioned_at = e.positioned_at),
                    (a.__v = e.__v),
                    (a._id = e._id),
                    (a.view = !1),
                    console.log(a),
                    t.push(a);
                }),
                  (this.items = t),
                  console.log(this.items),
                  (this.loader = !1);
              },
              (e) => {
                (this.nodata = !0), (this.loader = !1);
              }
            );
          }
          resetVenu() {
            this.venueTochange || (this.venueTochange = null),
              this.taxiService
                .updatedevicestatus(this.venuetochangeID, {
                  hotel_id: this.venueTochange,
                })
                .subscribe(
                  (e) => {
                    this.commonService.toast(
                      "Hotel updated Successfully",
                      "Success"
                    ),
                      this.getdevicelist();
                  },
                  (e) => {
                    this.commonService.toast(e.error.message, "Error");
                  }
                );
          }
          changeHotel(e, t, n) {
            console.log(n),
              (this.venueTochange = n.target.value),
              (this.venuetochangeID = e),
              (this.oldhotelId = t),
              t ? $("#confirmdResetVenu").modal("show") : this.resetVenu();
          }
          resetVenuId() {
            this.oldhotelId &&
              $("#Venue_" + this.venuetochangeID).val(this.oldhotelId._id),
              $("#confirmdResetVenu").modal("show");
          }
          saveid(e) {
            console.log(e), (this.deleteid = e);
          }
          genrateToken(e) {
            this.taxiService.SendUserAccessKey(e).subscribe(
              (e) => {
                this.commonService.toast(
                  "Key has been Generated Successfully",
                  "Success"
                );
              },
              (e) => {
                this.commonService.toast(e.error.message, "Error");
              }
            ),
              (this.password = "12345"),
              (this.encriptedPasswrod = "%8EM61");
          }
          showPassword(e) {
            this.items.forEach((t, n) => {
              t._id == e && (t.view = !t.view);
            });
          }
          routeToTakiPage() {
            this.router.navigate(["taxi/user-add"]);
          }
          deletedata() {
            (this.loader = !0),
              this.taxiService.deleteUser(this.deleteid).subscribe(
                (e) => {
                  (this.loader = !1),
                    !0 === e.success &&
                      this.commonService.toast(
                        "User deleted successfully.",
                        "Success"
                      ),
                    this.getUsersforlist();
                },
                (e) => {
                  this.getUsersforlist(),
                    (this.loader = !1),
                    this.commonService.toast(e.error.message, "Error");
                }
              );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-user-list"]],
            decls: 41,
            vars: 4,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "margin-bottom",
                "200px !important",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row"],
              [1, "col-md-5", "offset-1"],
              [1, "col-wrapper", "mt-4", "mb-4"],
              [1, "col-md-3"],
              [1, "col-wrapper", "mt-4", "mb-4", "text-right"],
              [1, "btn", "btn-primary", 3, "click"],
              [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
              [1, "search-wrapper"],
              ["action", "", "method", "GET"],
              [1, "input-group"],
              [1, "input-group-text"],
              [1, "fa", "fa-search"],
              [
                "type",
                "text",
                "id",
                "query",
                "name",
                "query",
                "placeholder",
                "Search",
                1,
                "form-control",
                "form-control-search",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [1, "container-z"],
              [1, "row", 2, "margin-top", "100px"],
              [1, "col-lg-2", "col-md-3"],
              [
                1,
                "col-lg-10",
                "col-md-9",
                "zia",
                2,
                "background-color",
                "white",
              ],
              [1, "main-content-wrapper"],
              ["class", "lead", 4, "ngIf"],
              ["class", "table-responsive", 4, "ngIf"],
              [1, "card-footer"],
              [1, "text-center"],
              [
                "previousLabel",
                "",
                "nextLabel",
                "",
                3,
                "pageChange",
                4,
                "ngIf",
              ],
              [
                "id",
                "confirmdelete",
                "tabindex",
                "-1",
                "role",
                "dialog",
                "aria-labelledby",
                "confirmdeleteLabel",
                "aria-hidden",
                "true",
                1,
                "modal",
                "fade",
              ],
              ["role", "document", 1, "modal-dialog"],
              [1, "modal-content"],
              [1, "modal-body"],
              [1, "modal-footer"],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-secondary",
              ],
              [
                "type",
                "button",
                "data-dismiss",
                "modal",
                1,
                "btn",
                "btn-primary",
                3,
                "click",
              ],
              [1, "lead"],
              [1, "table-responsive"],
              ["class", "table", 3, "ngStyle", 4, "ngIf"],
              [1, "table", 3, "ngStyle"],
              ["scope", "col", 2, "min-width", "140px !important"],
              [4, "ngFor", "ngForOf"],
              [2, "min-width", "140px"],
              [1, "custom-toggle", 2, "margin-bottom", "0px"],
              ["type", "checkbox", 3, "checked", "change"],
              [1, "custom-toggle-slider", "rounded-circle"],
              [2, "text-align", "center", "min-width", "140px"],
              [1, "btn-group"],
              [
                "type",
                "button",
                "data-toggle",
                "dropdown",
                "aria-haspopup",
                "true",
                "aria-expanded",
                "false",
                1,
                "btn",
                "btn-primary",
                "my-btn-primary",
                "dropdown-toggle",
              ],
              [1, "fas", "fa-ellipsis-v", "my-i"],
              [1, "dropdown-menu", "menu-div"],
              [1, "btn", "btn-primary", "my-btn", "mb-1", 3, "click"],
              [1, "btn", "btn-primary", "my-btn", "mb-1", 3, "routerLink"],
              [
                "type",
                "button",
                "name",
                "delete",
                "data-target",
                "#confirmdelete",
                "value",
                "Delete",
                "data-toggle",
                "modal",
                1,
                "btn-primary",
                "my-btn",
                "mb-1",
                2,
                "height",
                "32px",
                "margin-bottom",
                "0px",
                3,
                "click",
              ],
              ["previousLabel", "", "nextLabel", "", 3, "pageChange"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "div", 5),
                o["\u0275\u0275elementStart"](6, "h2"),
                o["\u0275\u0275text"](7, "Users"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 6),
                o["\u0275\u0275elementStart"](9, "div", 7),
                o["\u0275\u0275elementStart"](10, "a", 8),
                o["\u0275\u0275listener"]("click", function () {
                  return t.routeToTakiPage();
                }),
                o["\u0275\u0275text"](11, "Add New User"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](12, "div", 6),
                o["\u0275\u0275elementStart"](13, "div", 9),
                o["\u0275\u0275elementStart"](14, "div", 10),
                o["\u0275\u0275elementStart"](15, "form", 11),
                o["\u0275\u0275elementStart"](16, "div", 12),
                o["\u0275\u0275elementStart"](17, "div", 13),
                o["\u0275\u0275element"](18, "i", 14),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](19, "input", 15),
                o["\u0275\u0275listener"]("ngModelChange", function (e) {
                  return (t.searchText = e);
                }),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](20, "div", 16),
                o["\u0275\u0275elementStart"](21, "div", 17),
                o["\u0275\u0275elementStart"](22, "div", 18),
                o["\u0275\u0275element"](23, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](24, "div", 19),
                o["\u0275\u0275elementStart"](25, "div", 20),
                o["\u0275\u0275template"](26, Ia, 2, 0, "p", 21),
                o["\u0275\u0275template"](27, Oa, 2, 1, "div", 22),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](28, "div", 23),
                o["\u0275\u0275elementStart"](29, "div", 24),
                o["\u0275\u0275template"](
                  30,
                  Va,
                  1,
                  0,
                  "pagination-controls",
                  25
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](31, "div", 26),
                o["\u0275\u0275elementStart"](32, "div", 27),
                o["\u0275\u0275elementStart"](33, "div", 28),
                o["\u0275\u0275elementStart"](34, "div", 29),
                o["\u0275\u0275text"](
                  35,
                  "Are you sure you want to delete this?"
                ),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](36, "div", 30),
                o["\u0275\u0275elementStart"](37, "button", 31),
                o["\u0275\u0275text"](38, " No "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](39, "button", 32),
                o["\u0275\u0275listener"]("click", function () {
                  return t.deletedata();
                }),
                o["\u0275\u0275text"](40, " Yes "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](19),
                  o["\u0275\u0275property"]("ngModel", t.searchText),
                  o["\u0275\u0275advance"](7),
                  o["\u0275\u0275property"]("ngIf", t.nodata),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.nodata),
                  o["\u0275\u0275advance"](3),
                  o["\u0275\u0275property"]("ngIf", !t.nodata));
            },
            directives: [
              s.x,
              s.o,
              s.p,
              s.b,
              s.n,
              s.q,
              b,
              a.l,
              a.m,
              a.k,
              r.d,
              y.c,
            ],
            pipes: [y.b, E.a],
            styles: [""],
          })),
          e
        );
      })();
      function La(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "h3"),
          o["\u0275\u0275text"](1, "Create User Account"),
          o["\u0275\u0275elementEnd"]());
      }
      function Na(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "h3"),
          o["\u0275\u0275text"](1, "Edit User Account"),
          o["\u0275\u0275elementEnd"]());
      }
      function Aa(e, t) {
        1 & e && o["\u0275\u0275element"](0, "img", 23);
      }
      function qa(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 37),
          o["\u0275\u0275text"](1, " Name is required "),
          o["\u0275\u0275elementEnd"]());
      }
      function ja(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 37),
          o["\u0275\u0275text"](1, " Please EnterEmail Address. "),
          o["\u0275\u0275elementEnd"]());
      }
      function Ra(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 37),
          o["\u0275\u0275text"](1, " Role is required "),
          o["\u0275\u0275elementEnd"]());
      }
      function Ba(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 38),
          o["\u0275\u0275text"](1, " Please Enter Mobile Number. "),
          o["\u0275\u0275elementEnd"]());
      }
      function Ya(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "div", 38),
          o["\u0275\u0275text"](1, " Mobile Number is incorrect. "),
          o["\u0275\u0275elementEnd"]());
      }
      function Ha(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "button", 39),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).createhotel()
              );
            }),
            o["\u0275\u0275text"](1, " Confirm "),
            o["\u0275\u0275elementEnd"]();
        }
      }
      function za(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "button", 39),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"](2).updatehotel()
              );
            }),
            o["\u0275\u0275text"](1, " Confirm "),
            o["\u0275\u0275elementEnd"]();
        }
      }
      const Qa = function (e) {
        return { "is-invalid": e };
      };
      function $a(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "div", 24),
            o["\u0275\u0275elementStart"](1, "div", 10),
            o["\u0275\u0275elementStart"](2, "div", 25),
            o["\u0275\u0275elementStart"](3, "div", 26),
            o["\u0275\u0275elementStart"](4, "label", 27),
            o["\u0275\u0275text"](5, "Name"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](6, "input", 28),
            o["\u0275\u0275template"](7, qa, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](8, "div", 26),
            o["\u0275\u0275elementStart"](9, "label", 27),
            o["\u0275\u0275text"](10, "Email Address"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](11, "input", 30),
            o["\u0275\u0275template"](12, ja, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](13, "div", 26),
            o["\u0275\u0275elementStart"](14, "label", 27),
            o["\u0275\u0275text"](15, "Role"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](16, "input", 31),
            o["\u0275\u0275template"](17, Ra, 2, 0, "div", 29),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](18, "div", 26),
            o["\u0275\u0275elementStart"](19, "label", 27),
            o["\u0275\u0275text"](20, "Mobile Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275element"](21, "input", 32),
            o["\u0275\u0275template"](22, Ba, 2, 0, "div", 33),
            o["\u0275\u0275template"](23, Ya, 2, 0, "div", 33),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](24, "div", 10),
            o["\u0275\u0275elementStart"](25, "div", 34),
            o["\u0275\u0275elementStart"](26, "button", 35),
            o["\u0275\u0275listener"]("click", function () {
              return (
                o["\u0275\u0275restoreView"](e),
                o["\u0275\u0275nextContext"]().onClear()
              );
            }),
            o["\u0275\u0275text"](27, " Cancel "),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275template"](28, Ha, 2, 0, "button", 36),
            o["\u0275\u0275template"](29, za, 2, 0, "button", 36),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](6),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                11,
                Qa,
                e.submitted && e.f.name.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.name.errors),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                13,
                Qa,
                e.submitted && e.f.email.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.email.errors),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                15,
                Qa,
                e.submitted && e.f.role.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && e.f.role.errors),
            o["\u0275\u0275advance"](4),
            o["\u0275\u0275property"](
              "ngClass",
              o["\u0275\u0275pureFunction1"](
                17,
                Qa,
                e.submitted && e.f.phone.errors
              )
            ),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", e.submitted && !e.f.phone.value),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"](
              "ngIf",
              e.submitted && e.f.phone.value && e.f.phone.errors
            ),
            o["\u0275\u0275advance"](5),
            o["\u0275\u0275property"]("ngIf", e.editId),
            o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.editId);
        }
      }
      const Ua = function (e) {
        return { "max-height": e };
      };
      let Ga = (() => {
        class e {
          constructor(e, t, n, a, r, o) {
            (this.taxiservice = e),
              (this.commonService = t),
              (this.router = n),
              (this.location = a),
              (this.activatedRoute = r),
              (this.propertiesService = o),
              (this.dropVal = null),
              (this.editId = !0),
              (this._id = ""),
              (this.area = ""),
              (this.taxi_id = localStorage.getItem("userId"));
          }
          ngAfterViewInit() {
            if (!this._id) {
              const e = document.querySelector("#phone");
              this.obj = j()(e, { initialCountry: "au" });
            }
          }
          ngOnInit() {
            (this.tbody = this.propertiesService.createLength),
              (this.addHotelForm = new s.g({
                name: new s.d(this.name, [s.w.required]),
                role: new s.d(this.name, [s.w.required]),
                email: new s.d(this.email, [
                  s.w.required,
                  s.w.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                ]),
                phone: new s.d(this.phone, [
                  s.w.required,
                  s.w.minLength(9),
                  s.w.maxLength(12),
                  s.w.pattern("^[0-9]*$"),
                ]),
              })),
              (this._id = this.activatedRoute.snapshot.params.id),
              null != this._id && this.GetUserById(this._id),
              setTimeout(() => {
                document.querySelector('[href="/taxi/user-list"]').className =
                  "nav-link active";
              }, 10);
          }
          GetUserById(e) {
            this.taxiservice.getUserbyid(e).subscribe((e) => {
              const t = e.data;
              (this.editId = !1), this.patchData(t);
            });
          }
          patchData(e) {
            this.addHotelForm.patchValue({
              name: e.name,
              email: e.email,
              phone: e.phone,
              role: e.role,
            });
          }
          get f() {
            return this.addHotelForm.controls;
          }
          back() {
            this.location.back();
          }
          updatehotel() {
            const e = this.addHotelForm.controls;
            if (this.addHotelForm.invalid) console.log("Invalid form");
            else {
              const t = {
                name: e.name.value,
                role: e.role.value,
                email: e.email.value,
                phone: e.phone.value,
                parent: this.taxi_id,
              };
              (this.loader = !0),
                this.taxiservice.putUser(this._id, t).subscribe(
                  (e) => {
                    this.router.navigate(["/taxi/user-list"]),
                      this.commonService.toast(
                        "User updated Successfully",
                        "Success"
                      );
                  },
                  (e) => {
                    (this.loader = !1),
                      this.commonService.toast(e.error.message, "Error");
                  }
                );
            }
          }
          createhotel() {
            this.submitted = !0;
            const e = this.addHotelForm.controls;
            if (this.addHotelForm.invalid) console.log("Invalid form");
            else {
              const t = {
                name: e.name.value,
                role: e.role.value,
                email: e.email.value,
                phone: e.phone.value,
                parent: this.taxi_id,
              };
              (this.loader = !0),
                this.taxiservice.postUser(t).subscribe(
                  (e) => {
                    this.router.navigate(["/taxi/user-list"]),
                      this.commonService.toast("User Successfully", "Success");
                  },
                  (e) => {
                    (this.loader = !1),
                      this.commonService.toast(e.error.message, "Error");
                  }
                );
            }
          }
          onClear() {
            this.router.navigate(["taxi/user-list"]);
          }
          getCategoriesList() {
            this.taxiservice.getCategoriesList().subscribe(
              (e) => {
                this.category = e.data;
              },
              (e) => {}
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](i.a),
              o["\u0275\u0275directiveInject"](l.a),
              o["\u0275\u0275directiveInject"](r.b),
              o["\u0275\u0275directiveInject"](a.h),
              o["\u0275\u0275directiveInject"](r.a),
              o["\u0275\u0275directiveInject"](d.a)
            );
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-user-add"]],
            decls: 27,
            vars: 8,
            consts: [
              [
                1,
                "fixed-top",
                2,
                "background-color",
                "white",
                "height",
                "75px",
              ],
              [1, "top-bar-section"],
              [1, "container"],
              [1, "row", "mt-4"],
              [1, "col-md-2", "mb-2", "pt-2"],
              ["href", "javascript:;", 1, "back-button", 3, "click"],
              [1, "fa", "fa-arrow-left"],
              [1, "col-md-8", "mb-2"],
              [4, "ngIf"],
              [1, "container-z", 2, "margin-top", "100px"],
              [1, "row"],
              [1, "col-md-2"],
              [
                1,
                "col-md-10",
                "zia",
                2,
                "background-color",
                "white",
                3,
                "ngStyle",
              ],
              [1, "main-content-wrapper"],
              [1, "container-fluid", "mt--7"],
              [1, "col-xl-12", "order-xl-1"],
              [1, "card-header", "bg-white", "border-0"],
              [1, "row", "align-items-center"],
              [1, "col-8"],
              [1, "card-body"],
              ["role", "form", "method", "POST", 3, "formGroup"],
              ["src", "./assets/img/ripple.gif", 4, "ngIf"],
              ["class", "pl-lg-4", 4, "ngIf"],
              ["src", "./assets/img/ripple.gif"],
              [1, "pl-lg-4"],
              [1, "col-md-7", "offset-2"],
              [1, "form-group"],
              [1, "form-control-label"],
              [
                "type",
                "text",
                "formControlName",
                "name",
                "placeholder",
                "Enter Name",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              ["class", "invalid-feedback", 4, "ngIf"],
              [
                "type",
                "text",
                "formControlName",
                "email",
                "placeholder",
                "Enter Email Address",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [
                "type",
                "text",
                "formControlName",
                "role",
                "placeholder",
                "Enter Role",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                3,
                "ngClass",
              ],
              [
                "id",
                "phone",
                "type",
                "tel",
                "formControlName",
                "phone",
                "maxlength",
                "12",
                "placeholder",
                "Enter Your Mobile Number",
                "required",
                "",
                1,
                "form-control",
                "form-control-alternative",
                "m-w",
                3,
                "ngClass",
              ],
              [
                "class",
                "invalid-feedback",
                "style",
                "display: block;",
                4,
                "ngIf",
              ],
              [1, "col-md-12", "text-center"],
              [
                "type",
                "button",
                1,
                "btn",
                "btn-outline-dark",
                "mr-3",
                3,
                "click",
              ],
              [
                "type",
                "submit",
                "class",
                "btn btn-primary",
                3,
                "click",
                4,
                "ngIf",
              ],
              [1, "invalid-feedback"],
              [1, "invalid-feedback", 2, "display", "block"],
              ["type", "submit", 1, "btn", "btn-primary", 3, "click"],
            ],
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "header", 0),
                o["\u0275\u0275elementStart"](1, "section", 1),
                o["\u0275\u0275elementStart"](2, "div", 2),
                o["\u0275\u0275elementStart"](3, "div", 3),
                o["\u0275\u0275elementStart"](4, "div", 4),
                o["\u0275\u0275elementStart"](5, "a", 5),
                o["\u0275\u0275listener"]("click", function () {
                  return t.back();
                }),
                o["\u0275\u0275element"](6, "i", 6),
                o["\u0275\u0275text"](7, " Back "),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](8, "div", 7),
                o["\u0275\u0275template"](9, La, 2, 0, "h3", 8),
                o["\u0275\u0275template"](10, Na, 2, 0, "h3", 8),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](11, "div", 9),
                o["\u0275\u0275elementStart"](12, "div", 10),
                o["\u0275\u0275elementStart"](13, "div", 11),
                o["\u0275\u0275element"](14, "app-sidebar"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](15, "div", 12),
                o["\u0275\u0275elementStart"](16, "div", 13),
                o["\u0275\u0275elementStart"](17, "div", 14),
                o["\u0275\u0275elementStart"](18, "div", 10),
                o["\u0275\u0275elementStart"](19, "div", 15),
                o["\u0275\u0275elementStart"](20, "div", 16),
                o["\u0275\u0275elementStart"](21, "div", 17),
                o["\u0275\u0275element"](22, "div", 18),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementStart"](23, "div", 19),
                o["\u0275\u0275elementStart"](24, "form", 20),
                o["\u0275\u0275template"](25, Aa, 1, 0, "img", 21),
                o["\u0275\u0275template"](26, $a, 30, 19, "div", 22),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (o["\u0275\u0275advance"](9),
                  o["\u0275\u0275property"]("ngIf", t.editId),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.editId),
                  o["\u0275\u0275advance"](5),
                  o["\u0275\u0275property"](
                    "ngStyle",
                    o["\u0275\u0275pureFunction1"](6, Ua, t.tbody)
                  ),
                  o["\u0275\u0275advance"](9),
                  o["\u0275\u0275property"]("formGroup", t.addHotelForm),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", t.loader),
                  o["\u0275\u0275advance"](1),
                  o["\u0275\u0275property"]("ngIf", !t.loader));
            },
            directives: [
              a.l,
              b,
              a.m,
              s.x,
              s.o,
              s.h,
              s.b,
              s.n,
              s.f,
              s.u,
              a.j,
              s.j,
            ],
            styles: [""],
          })),
          e
        );
      })();
      function Ka(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "p", 32),
          o["\u0275\u0275text"](1, "No Device added yet."),
          o["\u0275\u0275elementEnd"]());
      }
      function Wa(e, t) {
        1 & e &&
          (o["\u0275\u0275elementStart"](0, "tr"),
          o["\u0275\u0275elementStart"](1, "td", 38),
          o["\u0275\u0275text"](2, " 1 "),
          o["\u0275\u0275elementEnd"](),
          o["\u0275\u0275elementStart"](3, "td", 38),
          o["\u0275\u0275text"](4, " Invoice Date "),
          o["\u0275\u0275elementEnd"](),
          o["\u0275\u0275elementStart"](5, "td", 38),
          o["\u0275\u0275text"](6, " Invoice Number "),
          o["\u0275\u0275elementEnd"](),
          o["\u0275\u0275elementStart"](7, "td", 38),
          o["\u0275\u0275elementStart"](8, "a", 39),
          o["\u0275\u0275element"](9, "i", 40),
          o["\u0275\u0275elementEnd"](),
          o["\u0275\u0275elementEnd"](),
          o["\u0275\u0275elementEnd"]());
      }
      const Ja = function (e) {
          return { "max-height": e };
        },
        Xa = function (e) {
          return { itemsPerPage: 10, currentPage: e };
        };
      function Za(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "table", 35),
            o["\u0275\u0275elementStart"](1, "thead"),
            o["\u0275\u0275elementStart"](2, "tr"),
            o["\u0275\u0275elementStart"](3, "th", 36),
            o["\u0275\u0275text"](4, "S. No."),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](5, "th", 36),
            o["\u0275\u0275text"](6, "Invoice Date"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](7, "th", 36),
            o["\u0275\u0275text"](8, "Invoice Number"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](9, "th", 36),
            o["\u0275\u0275text"](10, "PDF"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementStart"](11, "tbody"),
            o["\u0275\u0275template"](12, Wa, 10, 0, "tr", 37),
            o["\u0275\u0275pipe"](13, "paginate"),
            o["\u0275\u0275pipe"](14, "filter"),
            o["\u0275\u0275elementEnd"](),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"](2);
          o["\u0275\u0275property"](
            "ngStyle",
            o["\u0275\u0275pureFunction1"](8, Ja, e.tbody)
          ),
            o["\u0275\u0275advance"](12),
            o["\u0275\u0275property"](
              "ngForOf",
              o["\u0275\u0275pipeBind2"](
                13,
                2,
                o["\u0275\u0275pipeBind2"](14, 5, e.items, e.searchText),
                o["\u0275\u0275pureFunction1"](10, Xa, e.p)
              )
            );
        }
      }
      function er(e, t) {
        if (
          (1 & e &&
            (o["\u0275\u0275elementStart"](0, "div", 33),
            o["\u0275\u0275template"](1, Za, 15, 12, "table", 34),
            o["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          const e = o["\u0275\u0275nextContext"]();
          o["\u0275\u0275advance"](1),
            o["\u0275\u0275property"]("ngIf", !e.loader);
        }
      }
      function tr(e, t) {
        if (1 & e) {
          const e = o["\u0275\u0275getCurrentView"]();
          o["\u0275\u0275elementStart"](0, "pagination-controls", 41),
            o["\u0275\u0275listener"]("pageChange", function (t) {
              return (
                o["\u0275\u0275restoreView"](e),
                (o["\u0275\u0275nextContext"]().p = t)
              );
            }),
            o["\u0275\u0275elementEnd"]();
        }
      }
      const nr = [
        { path: "booking-list", component: ve, canActivate: [be.a] },
        { path: "hotel-list", component: A, canActivate: [be.a] },
        { path: "hotel-add", component: de, canActivate: [be.a] },
        { path: "hotel-add/:id", component: de, canActivate: [be.a] },
        { path: "device-list", component: Ne, canActivate: [be.a] },
        { path: "information", component: xe, canActivate: [be.a] },
        { path: "information-add", component: ft, canActivate: [be.a] },
        { path: "qremployee-list", component: Ke, canActivate: [be.a] },
        { path: "qremployee-add", component: dt, canActivate: [be.a] },
        { path: "qremployee-add/:id", component: dt, canActivate: [be.a] },
        { path: "dashboard", component: $n, canActivate: [be.a] },
        { path: "reports", component: _a, canActivate: [be.a] },
        { path: "user-list", component: Fa, canActivate: [be.a] },
        { path: "user-add", component: Ga, canActivate: [be.a] },
        { path: "user-add/:id", component: Ga, canActivate: [be.a] },
        {
          path: "accounts",
          component: (() => {
            class e {
              constructor(e, t, n, a, r) {
                (this.taxiService = e),
                  (this.commonService = t),
                  (this.router = n),
                  (this.activatedRoute = a),
                  (this.propertiesService = r),
                  (this.p = 1),
                  (this.password = ""),
                  (this.encriptedPasswrod = ""),
                  (this.nodata = !1);
              }
              ngOnInit() {
                (this.tbody = this.propertiesService.tbody),
                  this.gethotelforlist(),
                  this.getdevicelist(),
                  (this.loader = !0);
              }
              changeStatus(e, t) {
                const n = t.target.checked;
                console.log(status),
                  this.taxiService
                    .updatedevicestatus(e, { is_active: n })
                    .subscribe(
                      (e) => {
                        this.commonService.toast(
                          "Status updated Successfully",
                          "Success"
                        ),
                          this.getdevicelist();
                      },
                      (e) => {
                        this.commonService.toast(e.error.message, "Error");
                      }
                    );
              }
              gethotelforlist() {
                this.taxiService.gethotellist().subscribe(
                  (e) => {
                    const t = e.data;
                    (this.hotel = t), console.log(t), console.log("reeeeee", t);
                  },
                  (e) => {}
                );
              }
              getdevicelist() {
                this.taxiService.getdevicelist().subscribe(
                  (e) => {
                    var t = [];
                    e.data.forEach((e, n) => {
                      let a = new ye.a();
                      (a.adname = e.adname),
                        (a.created_at = e.created_at),
                        (a.hotel_id = e.hotel_id),
                        (a.is_active = e.is_active),
                        (a.is_login = e.is_login),
                        (a.password = e.password),
                        (a.plain_password = e.plain_password),
                        (a.serial_number = e.serial_number),
                        (a.sim_number = e.sim_number),
                        (a.taxi_id = e.taxi_id),
                        (a.updated_at = e.updated_at),
                        (a.positioned_at = e.positioned_at),
                        (a.__v = e.__v),
                        (a._id = e._id),
                        (a.view = !1),
                        console.log(a),
                        t.push(a);
                    }),
                      (this.items = t),
                      console.log(this.items),
                      (this.loader = !1);
                  },
                  (e) => {
                    (this.nodata = !0), (this.loader = !1);
                  }
                );
              }
              resetVenu() {
                this.venueTochange || (this.venueTochange = null),
                  this.taxiService
                    .updatedevicestatus(this.venuetochangeID, {
                      hotel_id: this.venueTochange,
                    })
                    .subscribe(
                      (e) => {
                        this.commonService.toast(
                          "Hotel updated Successfully",
                          "Success"
                        ),
                          this.getdevicelist();
                      },
                      (e) => {
                        this.commonService.toast(e.error.message, "Error");
                      }
                    );
              }
              changeHotel(e, t, n) {
                console.log(n),
                  (this.venueTochange = n.target.value),
                  (this.venuetochangeID = e),
                  (this.oldhotelId = t),
                  t ? $("#confirmdResetVenu").modal("show") : this.resetVenu();
              }
              resetVenuId() {
                this.oldhotelId &&
                  $("#Venue_" + this.venuetochangeID).val(this.oldhotelId._id),
                  $("#confirmdResetVenu").modal("show");
              }
              saveid(e) {
                console.log(e), (this.deleteid = e);
              }
              genrateToken(e) {
                const t = e;
                this.taxiService
                  .genratedeviespassword({ device_id: t })
                  .subscribe(
                    (e) => {
                      this.commonService.toast(
                        "Key has been Generated Successfully",
                        "Success"
                      ),
                        this.items.forEach((n, a) => {
                          n._id == t &&
                            ((n.plain_password = e.data[0].plain_password),
                            (n.password = e.data[0].password));
                        });
                    },
                    (e) => {
                      this.commonService.toast(e.error.message, "Error");
                    }
                  ),
                  (this.password = "12345"),
                  (this.encriptedPasswrod = "%8EM61");
              }
              showPassword(e) {
                this.items.forEach((t, n) => {
                  t._id == e && (t.view = !t.view);
                });
              }
              routeToTakiPage() {
                this.router.navigate(["taxi/user-add"]);
              }
            }
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(
                  o["\u0275\u0275directiveInject"](i.a),
                  o["\u0275\u0275directiveInject"](l.a),
                  o["\u0275\u0275directiveInject"](r.b),
                  o["\u0275\u0275directiveInject"](r.a),
                  o["\u0275\u0275directiveInject"](d.a)
                );
              }),
              (e.ɵcmp = o["\u0275\u0275defineComponent"]({
                type: e,
                selectors: [["app-accounts-list"]],
                decls: 39,
                vars: 4,
                consts: [
                  [
                    1,
                    "fixed-top",
                    2,
                    "background-color",
                    "white",
                    "margin-bottom",
                    "200px !important",
                  ],
                  [1, "top-bar-section"],
                  [1, "container"],
                  [1, "row"],
                  [1, "col-md-5", "offset-1"],
                  [1, "col-wrapper", "mt-4", "mb-4"],
                  [1, "col-md-3"],
                  [1, "col-wrapper", "mt-4", "mb-4", "text-right"],
                  [1, "col-wrapper", "mt-4", "mb-4", "g-3"],
                  [1, "search-wrapper"],
                  ["action", "", "method", "GET"],
                  [1, "input-group"],
                  [1, "input-group-text"],
                  [1, "fa", "fa-search"],
                  [
                    "type",
                    "text",
                    "id",
                    "query",
                    "name",
                    "query",
                    "placeholder",
                    "Search",
                    1,
                    "form-control",
                    "form-control-search",
                    3,
                    "ngModel",
                    "ngModelChange",
                  ],
                  [1, "container-z"],
                  [1, "row", 2, "margin-top", "100px"],
                  [1, "col-lg-2", "col-md-3"],
                  [
                    1,
                    "col-lg-10",
                    "col-md-9",
                    "zia",
                    2,
                    "background-color",
                    "white",
                  ],
                  [1, "main-content-wrapper"],
                  ["class", "lead", 4, "ngIf"],
                  ["class", "table-responsive", 4, "ngIf"],
                  [1, "card-footer"],
                  [1, "text-center"],
                  [
                    "previousLabel",
                    "",
                    "nextLabel",
                    "",
                    3,
                    "pageChange",
                    4,
                    "ngIf",
                  ],
                  [
                    "id",
                    "confirmdResetVenu",
                    "tabindex",
                    "-1",
                    "role",
                    "dialog",
                    "aria-labelledby",
                    "confirmdeleteLabel",
                    "aria-hidden",
                    "true",
                    1,
                    "modal",
                    "fade",
                  ],
                  ["role", "document", 1, "modal-dialog"],
                  [1, "modal-content"],
                  [1, "modal-body"],
                  [1, "modal-footer"],
                  [
                    "type",
                    "button",
                    "data-dismiss",
                    "modal",
                    1,
                    "btn",
                    "btn-secondary",
                    3,
                    "click",
                  ],
                  [
                    "type",
                    "button",
                    "data-dismiss",
                    "modal",
                    1,
                    "btn",
                    "btn-primary",
                    3,
                    "click",
                  ],
                  [1, "lead"],
                  [1, "table-responsive"],
                  ["class", "table", 3, "ngStyle", 4, "ngIf"],
                  [1, "table", 3, "ngStyle"],
                  [
                    "scope",
                    "col",
                    1,
                    "text-left",
                    2,
                    "min-width",
                    "140px !important",
                  ],
                  [4, "ngFor", "ngForOf"],
                  [1, "text-left", 2, "min-width", "140px"],
                  ["href", "javascript:;"],
                  [1, "fa", "fa-file"],
                  ["previousLabel", "", "nextLabel", "", 3, "pageChange"],
                ],
                template: function (e, t) {
                  1 & e &&
                    (o["\u0275\u0275elementStart"](0, "header", 0),
                    o["\u0275\u0275elementStart"](1, "section", 1),
                    o["\u0275\u0275elementStart"](2, "div", 2),
                    o["\u0275\u0275elementStart"](3, "div", 3),
                    o["\u0275\u0275elementStart"](4, "div", 4),
                    o["\u0275\u0275elementStart"](5, "div", 5),
                    o["\u0275\u0275elementStart"](6, "h2"),
                    o["\u0275\u0275text"](7, "My Account"),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](8, "div", 6),
                    o["\u0275\u0275element"](9, "div", 7),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](10, "div", 6),
                    o["\u0275\u0275elementStart"](11, "div", 8),
                    o["\u0275\u0275elementStart"](12, "div", 9),
                    o["\u0275\u0275elementStart"](13, "form", 10),
                    o["\u0275\u0275elementStart"](14, "div", 11),
                    o["\u0275\u0275elementStart"](15, "div", 12),
                    o["\u0275\u0275element"](16, "i", 13),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](17, "input", 14),
                    o["\u0275\u0275listener"]("ngModelChange", function (e) {
                      return (t.searchText = e);
                    }),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](18, "div", 15),
                    o["\u0275\u0275elementStart"](19, "div", 16),
                    o["\u0275\u0275elementStart"](20, "div", 17),
                    o["\u0275\u0275element"](21, "app-sidebar"),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](22, "div", 18),
                    o["\u0275\u0275elementStart"](23, "div", 19),
                    o["\u0275\u0275template"](24, Ka, 2, 0, "p", 20),
                    o["\u0275\u0275template"](25, er, 2, 1, "div", 21),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](26, "div", 22),
                    o["\u0275\u0275elementStart"](27, "div", 23),
                    o["\u0275\u0275template"](
                      28,
                      tr,
                      1,
                      0,
                      "pagination-controls",
                      24
                    ),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](29, "div", 25),
                    o["\u0275\u0275elementStart"](30, "div", 26),
                    o["\u0275\u0275elementStart"](31, "div", 27),
                    o["\u0275\u0275elementStart"](32, "div", 28),
                    o["\u0275\u0275text"](
                      33,
                      "Changing the assigned venue will reset the device password. Are you sure you want to continue ?"
                    ),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](34, "div", 29),
                    o["\u0275\u0275elementStart"](35, "button", 30),
                    o["\u0275\u0275listener"]("click", function () {
                      return t.resetVenuId();
                    }),
                    o["\u0275\u0275text"](36, " No "),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementStart"](37, "button", 31),
                    o["\u0275\u0275listener"]("click", function () {
                      return t.resetVenu();
                    }),
                    o["\u0275\u0275text"](38, " Yes "),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"](),
                    o["\u0275\u0275elementEnd"]()),
                    2 & e &&
                      (o["\u0275\u0275advance"](17),
                      o["\u0275\u0275property"]("ngModel", t.searchText),
                      o["\u0275\u0275advance"](7),
                      o["\u0275\u0275property"]("ngIf", t.nodata),
                      o["\u0275\u0275advance"](1),
                      o["\u0275\u0275property"]("ngIf", !t.nodata),
                      o["\u0275\u0275advance"](3),
                      o["\u0275\u0275property"]("ngIf", !t.nodata));
                },
                directives: [
                  s.x,
                  s.o,
                  s.p,
                  s.b,
                  s.n,
                  s.q,
                  b,
                  a.l,
                  a.m,
                  a.k,
                  y.c,
                ],
                pipes: [y.b, E.a],
                styles: ["i[_ngcontent-%COMP%]{color:#96e1ff}"],
              })),
              e
            );
          })(),
          canActivate: [be.a],
        },
      ];
      let ar = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
          (e.ɵinj = o["\u0275\u0275defineInjector"]({
            imports: [[r.e.forChild(nr)], r.e],
          })),
          e
        );
      })();
      var rr = n("Kmm4");
      let or = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
          (e.ɵinj = o["\u0275\u0275defineInjector"]({
            providers: [rr.a, be.a, l.a, a.d],
            imports: [
              [
                a.b,
                ar,
                E.b,
                y.a,
                s.t,
                s.i,
                R.GooglePlaceModule,
                yt.d,
                Et.g,
                xt.f,
                bt.b,
                Dt.c,
                Jn.b,
                Xn.b,
                Gn.a,
                Lt.a.forRoot({
                  apiKey: "AIzaSyDgezXBAGLQ6EI2Tu7XtQDl-4FSsjOPFNU",
                }),
                rr.b.forRoot(),
              ],
            ],
          })),
          e
        );
      })();
    },
  },
]);
