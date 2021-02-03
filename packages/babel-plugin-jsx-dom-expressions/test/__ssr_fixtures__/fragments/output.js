import { createComponent as _$createComponent } from "r-server";
import { escape as _$escape } from "r-server";
import { ssr as _$ssr } from "r-server";
const _tmpl$ = "<div>First</div>",
  _tmpl$2 = "<div>Last</div>",
  _tmpl$3 = ['<div id="', '">First</div>'],
  _tmpl$4 = ['<div id="', '">Last</div>'],
  _tmpl$5 = "<div></div>";
const multiStatic = [_$ssr(_tmpl$), _$ssr(_tmpl$2)];
const multiExpression = [_$ssr(_tmpl$), inserted, _$ssr(_tmpl$2), "After"];
const multiDynamic = [
  _$ssr(_tmpl$3, _$escape(state.first, true)),
  state.inserted,
  _$ssr(_tmpl$4, _$escape(state.last, true)),
  "After"
];
const singleExpression = inserted;
const singleDynamic = inserted();
const firstStatic = [inserted, _$ssr(_tmpl$5)];
const firstDynamic = [inserted(), _$ssr(_tmpl$5)];
const firstComponent = [_$createComponent(Component, {}), _$ssr(_tmpl$5)];
const lastStatic = [_$ssr(_tmpl$5), inserted];
const lastDynamic = [_$ssr(_tmpl$5), inserted()];
const lastComponent = [_$ssr(_tmpl$5), _$createComponent(Component, {})];
