<template>
  <div class="container">
    <Loading :active.sync="isLoading" />
    <div class="text-right">
      <button type="button" class="btn btn-outline-dark" @click="openModal('new')">建立新產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">主分類</th>
          <th width="200">次分類</th>
          <th>產品名稱</th>
          <th width="100">品質分級</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.options.subCategory }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.options.itemClass }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)">編輯</button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitPages="getProducts" />
    <!-- Modal -->
    <div
      id="productModal"
      class="modal fade text-left"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯 {{ tempProduct.title }} 產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <div class="custom-file mb-3">
                  <input
                   class="custom-file-input"
                   id="selectedFile"
                   type="file"
                   ref="file"
                   @change="uploadFile"/>
                  <label class="custom-file-label" for="selectedFile">上傳圖片 (不可超過 2 MB)</label>
                </div>
                <div v-for="i in 4" :key="'img_'+ i" class="form-group">
                  <label :for="'img' + i">請輸入圖片網址</label>
                  <input
                   type="text"
                   :id="'img' + i"
                   v-model="tempProduct.imageUrl[i-1]"
                   class="form-control"
                   placeholder="請輸入圖片連結">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt="">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    required
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">主分類</label>
                    <input
                      id="category"
                      v-model="tempProduct.category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入主分類"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="subCategory">子分類</label>
                    <input
                      id="subCategory"
                      v-model="tempProduct.options.subCategory"
                      type="text"
                      class="form-control"
                      placeholder="請輸入子分類"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="itemCalss">等級</label>
                    <input
                      id="itemCalss"
                      v-model="tempProduct.options.itemClass"
                      type="text"
                      class="form-control"
                      placeholder="請輸入等級"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="unit">單位</label>
                    <input
                      id="unit"
                      v-model="tempProduct.unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      id="price"
                      v-model="tempProduct.price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <h4>若產品為上衣、外套，請填寫以下規格</h4>
                <p>連身裙需填寫胸寬</p>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="shoulderAcross">肩寬</label>
                    <input
                      id="shoulderAcross"
                      v-model="tempProduct.options.shoulderAcross"
                      type="number"
                      class="form-control"
                      placeholder="請輸入肩寬"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="sleeveLength">袖長</label>
                    <input
                      id="sleeveLength"
                      v-model="tempProduct.options.sleeveLength"
                      type="number"
                      class="form-control"
                      placeholder="請輸入袖長"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="chestWidth">胸寬</label>
                    <input
                      id="chestWidth"
                      v-model="tempProduct.options.chestWidth"
                      type="number"
                      class="form-control"
                      placeholder="請輸入胸寬"
                    />
                  </div>
                </div>
                <hr />

                <h4>若產品為裙、褲，請填寫以下規格</h4>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="waist">腰寬</label>
                    <input
                      id="waist"
                      v-model="tempProduct.options.waist"
                      type="number"
                      class="form-control"
                      placeholder="請輸入腰寬"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="hipWidth">臀寬</label>
                    <input
                      id="hipWidth"
                      v-model="tempProduct.options.hipWidth"
                      type="number"
                      class="form-control"
                      placeholder="請輸入臀寬"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="length">褲(裙)長</label>
                    <input
                      id="length"
                      v-model="tempProduct.options.length"
                      type="number"
                      class="form-control"
                      placeholder="請輸入褲(裙)長"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="content">產品說明</label>
                  <textarea
                    id="content"
                    v-model="tempProduct.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品說明"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                   type="text"
                   id="description"
                   class="form-control"
                   v-model="tempProduct.description"
                   placeholder="請輸入產品描述"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="tempProduct.enabled"
                      class="form-check-input"
                      type="checkbox"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="delProductModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
        options: {
          subCategory: '',
          itemClass: '',
          shoulderAcross: 0,
          chestWidth: 0,
          sleeveLength: 0,
          hipWidth: 0,
          waist: 0,
          length: 0,
        },
      },
      isNew: false,
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '無法取得產品列表，請嘗試重整頁面。',
          });
        });
    },
    getDetails(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$http.get(api)
        .then((res) => {
          this.tempProduct = res.data.data;
          $('#productModal').modal('show');
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '抱歉，無法取得產品細節！',
          });
        });
    },
    // 開啟 Modal 視窗
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: [],
            options: {
              subCategory: '',
              itemClass: '',
              shoulderAcross: 0,
              chestWidth: 0,
              sleeveLength: 0,
              hipWidth: 0,
              waist: 0,
              length: 0,
            },
          };
          this.isNew = true;
          $('#productModal').modal('show');
          break;
        case 'edit':
          this.isNew = false;
          this.getDetails(item.id);
          break;
        case 'delete':
          this.tempProduct = { ...item };
          $('#delProductModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateProduct() {
      this.isLoading = true;
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }
      this.$http[httpMethod](api, this.tempProduct)
        .then(() => {
          $('#productModal').modal('hide');
          this.getProducts();
          this.isLoading = false;
          this.$swal({
            icon: 'success',
            title: '資料已更新！',
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '填寫資料失敗，請再試一次！',
          });
        });
    },
    delProduct() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.$http.delete(url)
        .then(() => {
          $('#delProductModal').modal('hide');
          this.getProducts();
          this.isLoading = false;
          this.$swal({
            icon: 'success',
            title: '刪除成功！',
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '刪除失敗，請再試一次！',
          });
        });
    },
    uploadFile() {
      this.isLoading = true;
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          this.isLoading = false;
          if (res.status === 200) {
            this.tempProduct.imageUrl.push(res.data.data.path);
          }
          this.$swal({
            icon: 'success',
            title: '上傳成功！',
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            icon: 'error',
            title: '檔案上傳失敗，請再試一次！',
          });
        });
    },
  },
};
</script>
