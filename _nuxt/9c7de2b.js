(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{487:function(e,t,l){"use strict";l.r(t);l(26);var n,c=l(18),r=(l(456),l(42),l(457)),o=l.n(r),d=(l(458),l(459)),m=l.n(d),v=(l(267),l(119)),h=l.n(v),f=(l(268),l(122)),w=l.n(f),x={middleware:"authenticated",components:(n={},Object(c.a)(n,w.a.name,w.a),Object(c.a)(n,h.a.name,h.a),Object(c.a)(n,m.a.name,m.a),Object(c.a)(n,o.a.name,o.a),n),data:function(){return{alarmRules:[],selectedWidgetIndex:null,newRule:{dId:null,deviceName:null,status:!0,variableFullName:null,variable:null,value:null,condition:null,triggerTime:null}}},methods:{deleteDevice:function(e){var t=this,l={headers:{token:this.$store.state.auth.token},params:{emqxRuleId:e.emqxRuleId}};this.$axios.delete("/alarm-rule",l).then((function(e){if("success"==e.data.status)return t.$notify({type:"success",icon:"tim-icons icon-check-2",message:"Success! Alarm Rule was deleted"}),void t.$store.dispatch("getDevices")})).catch((function(e){t.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:"Error"}),console.log(e)}))},updateStatusRule:function(e){var t=this,l={headers:{token:this.$store.state.auth.token}},n=JSON.parse(JSON.stringify(e));n.status=!n.status;var c={rule:n};this.$axios.put("/alarm-rule",c,l).then((function(e){if("success"==e.data.status)return t.$notify({type:"success",icon:"tim-icons icon-check-2",message:"Success! Alarm Rule was updated"}),void t.$store.dispatch("getDevices")})).catch((function(e){t.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:"Error"}),console.log(e)}))},createNewRule:function(){var e=this;if(null!=this.selectedWidgetIndex)if(null!=this.newRule.condition)if(null!=this.newRule.value)if(null!=this.newRule.triggerTime){this.newRule.dId=this.$store.state.selectedDevice.dId,this.newRule.deviceName=this.$store.state.selectedDevice.name,this.newRule.variableFullName=this.$store.state.selectedDevice.template.widgets[this.selectedWidgetIndex].variableFullName,this.newRule.variable=this.$store.state.selectedDevice.template.widgets[this.selectedWidgetIndex].variable;var t={headers:{token:this.$store.state.auth.token}},l={newRule:this.newRule};this.$axios.post("/alarm-rule",l,t).then((function(t){if("success"==t.data.status)return e.newRule.variable=null,e.newRule.condition=null,e.newRule.value=null,e.newRule.triggerTime=null,e.selectedWidgetIndex=null,e.$notify({type:"success",icon:"tim-icons icon-check-2",message:"Success! Alarm Rule was added"}),void e.$store.dispatch("getDevices")})).catch((function(t){e.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:"Error"}),console.log(t)}))}else this.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:" Trigger Time is empty"});else this.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:" Value is empty"});else this.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:" Condition must be selected"});else this.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:" Variable must be selected"})}}},R=l(1),component=Object(R.a)(x,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12"},[e.$store.state.devices.length>0?l("card",[l("div",{attrs:{slot:"header"},slot:"header"},[l("h4",{staticClass:"card-title"},[e._v("\n            Create new Alarm Rule "+e._s(e.selectedWidgetIndex)+"\n          ")])]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-3"},[l("el-select",{staticClass:"select-success",staticStyle:{"margin-top":"25px"},attrs:{required:"",placeholder:"Variable"},model:{value:e.selectedWidgetIndex,callback:function(t){e.selectedWidgetIndex=t},expression:"selectedWidgetIndex"}},e._l(e.$store.state.selectedDevice.template.widgets,(function(e,t){return l("el-option",{key:t,staticClass:"text-dark",attrs:{value:t,label:e.variableFullName}})})),1)],1),e._v(" "),l("div",{staticClass:"col-3"},[l("el-select",{staticClass:"select-warning",staticStyle:{"margin-top":"25px"},attrs:{required:"",placeholder:"Condition"},model:{value:e.newRule.condition,callback:function(t){e.$set(e.newRule,"condition",t)},expression:"newRule.condition"}},[l("el-option",{staticClass:"text-dark",attrs:{value:"=",label:"="}}),e._v(" "),l("el-option",{staticClass:"text-dark",attrs:{value:">",label:">"}}),e._v(" "),l("el-option",{staticClass:"text-dark",attrs:{value:">=",label:">="}}),e._v(" "),l("el-option",{staticClass:"text-dark",attrs:{value:"<",label:"<"}}),e._v(" "),l("el-option",{staticClass:"text-dark",attrs:{value:"<=",label:"<="}}),e._v(" "),l("el-option",{staticClass:"text-dark",attrs:{value:"!=",label:"!="}})],1)],1),e._v(" "),l("div",{staticClass:"col-3"},[l("base-input",{attrs:{label:"Value",type:"number"},model:{value:e.newRule.value,callback:function(t){e.$set(e.newRule,"value",t)},expression:"newRule.value"}})],1),e._v(" "),l("div",{staticClass:"col-3"},[l("base-input",{attrs:{label:"Trigger Time",type:"number"},model:{value:e.newRule.triggerTime,callback:function(t){e.$set(e.newRule,"triggerTime",t)},expression:"newRule.triggerTime"}})],1)]),e._v(" "),l("br"),l("br"),e._v(" "),l("div",{staticClass:"row pull-right"},[l("div",{staticClass:"col-12"},[l("base-button",{staticClass:"mb-3",attrs:{"native-type":"submit",type:"primary",size:"lg",disabled:0==e.$store.state.devices.length},on:{click:function(t){return e.createNewRule()}}},[e._v("\n              Add Alarm Rule\n            ")])],1)])]):l("card",[e._v("\n        You need to select a device to create an Alarm\n      ")])],1)]),e._v(" "),e.$store.state.devices.length>0?l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12"},[l("card",[l("div",{attrs:{slot:"header"},slot:"header"},[l("h4",{staticClass:"card-title"},[e._v("Alarm Rules")])]),e._v(" "),e.$store.state.selectedDevice.alarmRules.length>0?l("el-table",{attrs:{data:e.$store.state.selectedDevice.alarmRules}},[l("el-table-column",{attrs:{"min-width":"50",label:"#",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){t.row;var n=t.$index;return l("div",{staticClass:"photo"},[e._v("\n              "+e._s(n+1)+"\n            ")])}}],null,!1,4102571309)}),e._v(" "),l("el-table-column",{attrs:{prop:"variableFullName",label:"Var Name"}}),e._v(" "),l("el-table-column",{attrs:{prop:"variable",label:"Var"}}),e._v(" "),l("el-table-column",{attrs:{prop:"condition",label:"Condition"}}),e._v(" "),l("el-table-column",{attrs:{prop:"value",label:"Value"}}),e._v(" "),l("el-table-column",{attrs:{prop:"triggerTime",label:"Trigger Time"}}),e._v(" "),l("el-table-column",{attrs:{prop:"counter",label:"Matches"}}),e._v(" "),l("el-table-column",{attrs:{"min-width":"110","header-align":"right",align:"right",label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;t.$index;return l("div",{staticClass:"text-right table-actions"},[l("el-tooltip",{attrs:{content:"Delete",effect:"light",placement:"top"}},[l("base-button",{staticClass:"btn-link",attrs:{type:"danger",icon:"",size:"sm"},on:{click:function(t){return e.deleteDevice(n)}}},[l("i",{staticClass:"tim-icons icon-simple-remove "})])],1),e._v(" "),l("el-tooltip",{staticStyle:{"margin-left":"20px"},attrs:{content:"Rule Status"}},[l("i",{staticClass:"fas fa-exclamation-triangle",class:{"text-warning":n.status}})]),e._v(" "),l("el-tooltip",{staticStyle:{"margin-left":"5px"},attrs:{content:"Change Rule Status"}},[l("base-switch",{staticStyle:{"margin-top":"10px"},attrs:{value:n.status,type:"primary","on-text":"ON","off-text":"OFF"},on:{click:function(t){return e.updateStatusRule(n)}}})],1)],1)}}],null,!1,2619207406)})],1):l("h4",{staticClass:"card-title"},[e._v("No Alarm Rules")])],1)],1)]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseInput:l(74).default,BaseButton:l(73).default,Card:l(72).default,BaseSwitch:l(165).default})}}]);