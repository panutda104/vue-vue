<template>
  <div>
    <div class="col-12">
      <div class="mb-2">
        <h1>หน้าหลัก</h1>
      </div>
    </div>
    <div class="separator mb-5"></div>

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4"> </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <div class="col-xl-3 col-lg-6 mb-4">
        <div class="card">
          <div class="card-header p-0 position-relative">
            <div class="position-absolute handle card-icon"></div>
          </div>
          <div class="card-body d-flex align-items-center">
            <img
              src="/assets/img/products/cloud.png"
              class="img-thumbnail list-thumbnail align-self-center m-3"
              style="height: 50px !important"
            />
            <b-row>
            <b-colxx xxs="12">
            <h6 class="mb-0" v-b-toggle.collapse-1>รายการแจ้งปัญหา</h6>
            </b-colxx>
               <b-colxx xxs="12">
            <h6 class="mb-0" v-b-toggle.collapse-1 style="font-size: 16px;margin-top: 10px;">( {{dateontime.length}} ) รายการ</h6>
            </b-colxx>
            </b-row>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 mb-4">
        <div class="card">
          <div class="card-header p-0 position-relative">
            <div class="position-absolute handle card-icon"></div>
          </div>
          <div class="card-body d-flex align-items-center">
            <img
              src="/assets/img/products/png-clipart.png"
              class="img-thumbnail list-thumbnail align-self-center m-3"
              style="height: 50px !important"
            />
             <b-row>
            <b-colxx xxs="12">
            <h6 class="mb-0" v-b-toggle.collapse-2>วันหมดอายุระบบ</h6>
            </b-colxx>
               <b-colxx xxs="12">
            <h6 class="mb-0" v-b-toggle.collapse-2 style="font-size: 16px;margin-top: 10px;">( {{dateontime.length}} ) รายการ</h6>
            </b-colxx>
            </b-row>
           
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 mb-4">
        <div class="card">
          <div class="card-header p-0 position-relative">
            <div class="position-absolute handle card-icon"></div>
          </div>
          <div class="card-body d-flex align-items-center">
            <img
              src="/assets/img/products/service.png"
              class="img-thumbnail list-thumbnail align-self-center m-3"
              style="height: 50px !important"
            />
             <b-row>
            <b-colxx xxs="12">
           <h6 class="mb-0" v-b-toggle.collapse-3>วันหมดอายุโดเมน</h6>
            </b-colxx>
               <b-colxx xxs="12">
            <h6 class="mb-0" v-b-toggle.collapse-3 style="font-size: 16px;margin-top: 10px;">( {{dateontime2.length}} ) รายการ</h6>
            </b-colxx>
            </b-row>  
           
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 mb-4">
        <div class="card">
          <div class="card-header p-0 position-relative">
            <div class="position-absolute handle card-icon"></div>
          </div>
          <div class="card-body d-flex align-items-center">
            <img
              src="/assets/img/products/cc.png"
              class="img-thumbnail list-thumbnail align-self-center m-3"
              style="height: 50px !important"
            />
               <b-row>
            <b-colxx xxs="12">
          <h6 class="mb-0" v-b-toggle.collapse-4>เว็บไซต์ทดลอง</h6>
            </b-colxx>
               <b-colxx xxs="12">
            <h6 class="mb-0" v-b-toggle.collapse-4 style="font-size: 16px;margin-top: 10px;"> ( {{dateontime3.length}} ) รายการ</h6>
            </b-colxx>
            </b-row>  
           
          
          </div>
        </div>
      </div>
    </b-row>

    <div class="separator mb-5"></div>

    <!-- collap1 -->
    <div>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">รายการแจ้งปัญหา</p>
          <table class="table" id="notitable">
            <thead class="thead-light">
              <tr>
                <th scope="col">Site ID</th>
                <th scope="col">เลขใบที่รับแจ้ง</th>
                <th scope="col">ชื่อเว็บไซต์</th>
                <th scope="col">โทรศัพท์</th>
                <th scope="col">รายละเอียด</th>
                <th scope="col">วันที่รับแจ้ง</th>
                <th scope="col">กำหนดเสร็จงาน</th>
                <th scope="col">ผู้รับแจ้ง</th>
                <th scope="col">สถานะการแจ้งปัญหา</th>
              </tr>
            </thead>

            <tbody>
              <tr v-if="dateontime.length" v-for="item in dateontime">
                <!-- <th scope="row">1</th> -->
                <td>{{ item.site_id }}</td>
                <td>{{ item.site_id }}</td>
                <td>{{ item.agent_domain }}</td>
                <td></td>
                <td>{{ item.cmz_subdomain }}</td>
                <td>{{ item.last_update_stock_value }}</td>
                <td></td>
                <!-- <td>{{ item.last_update_stock_value }}</td> -->
                <td>{{ item.domain }}</td>
              </tr>

              <tr v-else>
                <td>sadsad-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-collapse>
    </div>

    <!-- collap2 -->
    <div>
      <b-collapse id="collapse-2" class="mt-2">
        <b-card>
          <p class="card-text">วันหมดอายุระบบ</p>
          <table class="table" id="notitable">
            <thead class="thead-light">
              <tr>
                <th scope="col">Site ID</th>
                <th scope="col">Domain</th>
                <th scope="col">Package</th>
                <th scope="col">วันหมดอายุ</th>
                <th scope="col">ชื่อร้าน</th>
                <th scope="col">เวอร์ชั่น</th>
                <th scope="col-1"></th>
                <th scope="col-1"></th>
              </tr>
            </thead>

            <tbody>
              <tr v-if="dateontime.length" v-for="item in dateontime">
                <!-- <th scope="row">1</th> -->
                <td>{{ item.site_id }}</td>
                <td>{{ item.domain }}</td>
                <td>{{ item.package }}</td>
                <td>{{ item.last_update_stock_value }}</td>
                <td>{{ item.cmz_subdomain }}</td>
                <td>{{ item.crm_version }}</td>
                <!-- <td>{{ item.last_update_stock_value }}</td> -->
              </tr>

              <tr v-else>
                <td>sadsad-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-collapse>
    </div>

    <!-- collap3 -->
    <div>
      <b-collapse id="collapse-3" class="mt-2">
        <b-card>
          <p class="card-text">วันหมดอายุโดเมน</p>
          <table class="table" id="notitable">
            <thead class="thead-light">
              <tr>
                <th scope="col">Site ID</th>
                <th scope="col">Domain</th>
                <th scope="col">Package</th>
                <th scope="col">วันหมดอายุ</th>
                <th scope="col">ชื่อร้าน</th>
                <th scope="col">เวอร์ชั่น</th>
                <th scope="col-1"></th>
                <th scope="col-1"></th>
              </tr>
            </thead>

            <tbody>
              <tr v-if="dateontime2.length" v-for="item in dateontime2">
                <!-- <th scope="row">1</th> -->
                <td>{{ item.site_id}}</td>
                <td>{{ item.domain }}</td>
                <td>{{ item.package }}</td>
                <td>{{ item.last_update_stock_value }}</td>
                <td>{{ item.cmz_subdomain }}</td>
                <td>{{ item.crm_version }}</td>
              </tr>

              <tr v-else>
                <td>sadsad-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-collapse>
    </div>

    <!-- collap4 -->
    <div>
      <b-collapse id="collapse-4" class="mt-2">
        <b-card>
          <p class="card-text">เว็บไซต์ทดลอง</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Site ID</th>
                <th scope="col">วันหมดอายุ</th>
                <th scope="col">Domain</th>
                <th scope="col">Package</th>
                <th scope="col">จำนวนเพจ</th>
                <th scope="col">ชื่อร้าน</th>
                <th scope="col">เบอร์โทรศัพท์</th>
                <th scope="col">จำนวนบิล</th>
                <th scope="col">จำนวนสินค้า</th>
                <th scope="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
              <tr v-if="dateontime3.length" v-for="item in dateontime3">
                <!-- <th scope="row">1</th> -->
                <td>{{ item.site_id }}</td>
                <td>{{ item.last_daily_report}}</td>
                <td>{{ item.domain}}</td>
                <td>{{ item.package}}</td>
                <td>{{ item.chat}}</td>
                <td>{{ item.cmz_subdomain}}</td>
                <td></td>
                <td>{{ item.trial_number_order_day }}</td>
                <td>{{ item.trial_number_product }}</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-collapse>
    </div>

  </div>
</template>
//
<script>
import datasite from "C:/Users/User/Desktop/piaf-vue-start/src/data/noti";

export default {
  name: "noti",
  data() {
    return {
      items: datasite,
      search: null,
      column: null,
      countallmenu:{
        listerror:0,
        datesystem:0,
        datedomain:0,
websitetest:0
      }
    };
  },

  methods: {},
  computed: {
    dateontime() {
      let currentMonth = new Date().getMonth() +1;
      let currentYear = new Date().getFullYear();
      let events = this.items.filter((e) => {
        var [year, month] = e.last_update_stock_value.split("-");

        return (currentMonth <= +month && +month <= currentMonth+3) && (currentYear == year);
      });
      if (events.length) {
        return events;
      } else {
        return [];
      }
    },
    dateontime2() {
      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();
      let events = this.items.filter((e) => {
        var [year, month] = e.last_update_stock_value.split("-");

        return (currentMonth <= +month && +month <= currentMonth+3) && (currentYear == year);
      });
      if (events.length) {
        return events;
      } else {
        return [];
      }
    },
    dateontime3() {
      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();
      let currentdate = new Date().getDate();
      let events = this.items.filter((e) => {
        var [year, month,date] = e.last_daily_report.split("-");       
        return (currentMonth <= +month && +month <= currentMonth+2) && (currentYear == year);
        return (currentdate <= +date && +date<= currentdate+6 ) && (currentYear == year);
      });
      if (events.length) {
        return events;
      } else {
        return [];
      }
    },
  },
};
</script>
