import { adminRoot } from "./config";

const data = [{
  id: "start",
  icon: "iconsminds-shop",
  label: "หน้าหลัก",
  to: `${adminRoot}/start`,
},
{
  id: "noti",
  icon: "iconsminds-chemical",
  label: "รายการแจ้งปัญหา",
  to: `${adminRoot}/noti`,
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "รายการแจ้งปัญหา",
    to: `${adminRoot}/noti`,
    newWindow: false
  }, {
    icon: "simple-icon-paper-plane",
    label: "เพิ่มรายการ",
    to: `${adminRoot}/create`,
    newWindow: false
  }
  ]
},

{
  id: "system",
  icon: "iconsminds-digital-drawing",
  label: "วันหมดอายุระบบ",
  to: `${adminRoot}/system`,
  
},
{
  id: "domain",
  icon: "iconsminds-three-arrow-fork",
  label: "วันหมดอายุโดเมน",
  to: `${adminRoot}/domain`,
},
{
  id: "website",
  icon: "iconsminds-library",
  label: "เว็บไซต์ทดลอง",
  to: `${adminRoot}/website`,
}

];
export default data;
