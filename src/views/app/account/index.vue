<template>
  <div>
    <div class="col-12">
      <div class="mb-2">
        <h1>ข้อมูลบัญชี</h1>
      </div>
    </div>
    <div class="separator mb-5"></div>
    
    <div class="card mb-4">
      <div class="card-body">
      <div class="row"> 
      <div class="col-md-6 col-sm-12 mx-auto text-center">

          <label class="form-group has-float-label">
            <input class="form-control" />
            <span>Username</span>
          </label>

          <label class="form-group has-float-label">
            <input class="form-control" type="password" placeholder="" />
            <span>Password</span>
          </label>

          <label class="form-group has-float-label">
            <input class="form-control" data-role="nameinput" type="text" />
            <span>ชื่อ-นามสกุล</span></span>
          </label>

          <label class="form-group has-float-label">
            <input class="form-control" data-role="telinput" type="text" />
            <span>เบอร์โทรศัพท์</span>
          </label>

          <label class="form-group has-float-label">        
            <div class="mb-2">
                <div class="custom-control custom-checkbox mb-4">
                    <input type="checkbox" class="custom-control-input" id="customCheckThis">
                    <label class="custom-control-label" for="customCheckThis">เปลี่ยนรหัสผ่าน</label>
                </div>
            </div>
          </label>

          <label class="form-group has-float-label">
            <input class="form-control" data-role="newpass" type="password" disabled="disabled" />
            <span>รหัสผ่านใหม่</span>
          </label>

          <label class="form-group has-float-label">
            <input class="form-control" data-role="confirmpass" type="password" disabled="disabled"/>
            <span>ยืนยันรหัสผ่าน</span>
          </label>

          <label class="form-group has-float-label">
            <input class="form-control" data-role="pass" type="password"  disabled="disabled"/>
            <span>รหัสผ่านเก่า</span>
          </label>

        <div>
            <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">แก้ไข</b-button>
            <b-modal id="bv-modal-example" hide-footer>
                <div class="d-block text-center">
                <h3>Update Success! </h3>
                </div>              
            </b-modal>
        </div>

        </div>
        </div>
        </div>
        </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showMsgBoxOne() {
        this.boxOne = ''
        this.$bvModal.msgBoxOk ('Update Success!')
          .then(value => {
            this.boxOne = value
          })
        
      }
    }
  }
</script>


