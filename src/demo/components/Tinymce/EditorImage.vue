<template>
  <div class="upload-container">
    <v-dialog
      v-model="dialogVisible"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{on}">
        <v-btn
          class="info"
          :style="{background: color,borderColor: color}"
          @click="dialogVisible= = rue"
          v-on="on"
        >
          upload
          <v-icon
            right
            dark
          >
            cloud_upload
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-responsive :aspect-ratio="16 / 9">
          <v-card-text>
            <v-btn color="primary">
              Click upload
            </v-btn>
          </v-card-text>
        </v-responsive>
        <!--<el-upload-->
        <!--:multiple="true"-->
        <!--:file-list="fileList"-->
        <!--:show-file-list="true"-->
        <!--:on-remove="handleRemove"-->
        <!--:on-success="handleSuccess"-->
        <!--:before-upload="beforeUpload"-->
        <!--class="editor-slide-upload"-->
        <!--action="https://httpbin.org/post"-->
        <!--list-type="picture-card"-->
        <!--&gt;-->
        <!--<v-btn color="primary">Click upload</v-btn>-->
        <!--</el-upload>-->
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="error"
            flat
            @click="dialogVisible = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="success"
            flat
            @click="handleSubmit"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff',
    },
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: [],
    };
  },
  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every((item) => this.listObj[item].hasSuccess);
    },
    handleSubmit() {
      const arr = Object.keys(this.listObj).map((v) => this.listObj[v]);
      if (!this.checkAllSuccess()) {
        this.$message('Please wait for all images to be uploaded successfully. '
          + 'If there is a network problem, please refresh the page and upload again!');
        return;
      }
      this.$emit('successCBK', arr);
      this.listObj = {};
      this.fileList = [];
      this.dialogVisible = false;
    },
    handleSuccess(response, file) {
      const { uid } = file;
      const objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.files.file;
          this.listObj[objKeyArr[i]].hasSuccess = true;
          return;
        }
      }
    },
    handleRemove(file) {
      const { uid } = file;
      const objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]];
          return;
        }
      }
    },
    beforeUpload(file) {
      const self = this;
      const URL = window.URL || window.webkitURL;
      const fileName = file.uid;
      this.listObj[fileName] = {};
      return new Promise((resolve) => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height,
          };
        };
        resolve(true);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>
