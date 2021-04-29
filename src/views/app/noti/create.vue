<template>
  <div>
    <div class="col-12">
      <div class="mb-2">
        <h1>เพิ่มรายการ</h1>
      </div>
    </div>
    <div class="separator mb-5"></div>

    <div class="card mb-4">
      <div class="card-body">
        <h5 class="mb-4">เพิ่มรายการแจ้งปัญหา</h5>
        
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="no">เลขใบที่รับแจ้ง</label>
              <input type="text" class="form-control" id="no" />
            </div>
            <div class="form-group col-md-6">
              <label for="websitename">ชื่อเว็บไซต์</label>
              <input type="text" class="form-control" id="websitename" />
              <div class="valid-feedback">
        Looks good!
      </div>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">โทรศัพท์</label>
            <input type="text" class="form-control" id="phone" maxlength="10" />
          </div>
          <div class="form-group">
            <label for="detail">รายละเอียด</label>
            <textarea class="form-control" id="detail" rows="3"></textarea>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="notidate">วันที่รับเเจ้ง</label>
              <b-form-datepicker
                id="notidate"
                class="mb-2"
              ></b-form-datepicker>
            </div>
            <div class="form-group col-md-6">
              <label for="susdate" class="bi-calendar b-icon bi">กำหนดเสร็จงาน</label>
              <b-form-datepicker
                id="susdate"
                class="mb-2"
              ></b-form-datepicker>
            </div>

            <div class="form-group col-md-6">
              <label for="inputZip">ผู้รับแจ้ง</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>

            <div class="form-group col-md-6">
            <label for="statusnoti">สถานะการแจ้งปัญหา</label>
            <select class="form-control" style="height: auto;">
                <option value="-">-</option>
                <option value="แจ้งปัญหา">แจ้งปัญหา</option>
                <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
                <option value="ยกเลิกการแจ้ง">ยกเลิกการแจ้ง</option>
                <option value="แจ้งสำเร็จ">แจ้งสำเร็จ</option>
                <option value="ส่งมอบ">ส่งมอบ</option>
              </optgroup>
            </select>
          </div>

          </div>
          <button type="submit" class="btn btn-primary d-block mt-3">บันทึก</button>
      </div>
    </div>
  </div>
</template>

