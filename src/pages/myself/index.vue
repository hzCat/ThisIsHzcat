<template>
  <div id="container">
      <div class="inside-con">
          <ul>
                <li v-for="(item,index) in myInfo" :key="index" class="all-list">
                    <a @click="aClick" :data-idx="index">{{item}}</a>
                </li>
          </ul>
          <div class="info">{{detail[clickIndex]}}</div>
      </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  data() {
    return {
      myInfo: ["基本信息", "学历信息", "工作经验", "项目经验", "个人评价", "留言板"],
      detail: [
        "asdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asd",
        "asdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasd",
        "asdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdljk;asjk;sjksdfjksdfjksjkasdf asdasdfasdjlfkasdal;kdfjasdlkfjal;sdfjka;slkdf"
        ],
      clickIndex: -1
    };
  },
  methods: {
    aClick(e) {
      console.log(this.clickIndex);
      console.log(e.target.dataset.idx);
      if (e.target.dataset.idx !== this.clickIndex) {
        this.clickIndex = e.target.dataset.idx;
      } else {
        this.clickIndex == -1;
      }
    }
  }
};
</script>

