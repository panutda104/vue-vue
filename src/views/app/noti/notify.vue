<template>
  <div>
    <div class="col-12">
      <div class="mb-2">
        <h1>รายการแจ้งปัญหา</h1>
        <div class="top-right-button-container">
          <button type="button" class="btn btn-primary btn-lg top-right-button mr-1">
            <router-link to = "./create">ADD NEW</router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="separator mb-5"></div>
  

  

    <div class="col-lg-14 col-md-14 mb-14">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">เพิ่มรายการปัญหาที่ปุ่มด้านบน</h5>

          <table class="table" id = "notitable">
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
              <tr v-for="item in items" >
                <!-- <th scope="row">1</th> -->
                <td>{{ item.id }}</td>
                <td>{{ item.site_id}}</td>
                <td>{{ item.agent_domain }}</td>
                <td>{{ item.expire_dt }}</td>
                <td>{{ item.cmz_subdomain }}</td>
                <td>{{ item.expire_dt }}</td>
                <td>{{ item.last_update_stock_value }}</td>
                <td>{{ item.main_app_domain }}</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
 
  </div>
</template>
<script>
import datasite from "C:/Users/User/Desktop/piaf-vue-start/src/data/noti";

export default {
  name: "noti",
  data() {
    return {
      items: datasite,
      search: null,
      column: null,
    };
  },
  filters: {
  capitalize: function (value) {
   
    return value.expire_dt
  }
},
methods: {
  fiftertime(){

  },
},
  computed: {
     cols () {
      return this.items.length >= 1 ? Object.keys(this.items[0]) : []
    },
    rows () {
      if (!this.items.length) {
        return []
      }
      
      return this.items.filter(item => {
        let props = (this.search && this.column) ? [item[this.column]] : Object.values(item)
        
        
        return props.some(prop => !this.search || ((typeof prop === 'string') ? prop.includes(this.search) : prop.toString(10).includes(this.search)))
      })
    }
  }
};

</script>


