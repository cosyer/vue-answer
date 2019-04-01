import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);

const state = {
  score: 20,
  allTime: 20,
  itemNum: 0,
  timer: null,
  problems: [
    {
      problemId: 1,
      problemTitle: "奥林匹克运动会的发源地是？",
      answers: [
        {
          answerId: "a1",
          fid: 1,
          text: "古罗马",
          isTrue: false
        },
        {
          answerId: "a2",
          fid: 1,
          text: "古希腊",
          isTrue: true
        },
        {
          answerId: "a3",
          fid: 1,
          text: "古代中国",
          isTrue: false
        },
        {
          answerId: "a4",
          fid: 1,
          text: "古巴比伦",
          isTrue: false
        }
      ]
    },
    {
      problemId: 2,
      problemTitle: "咖啡的故乡是哪里？",
      answers: [
        {
          answerId: "a5",
          fid: 2,
          text: "亚洲",
          isTrue: false
        },
        {
          answerId: "a6",
          fid: 2,
          text: "美洲",
          isTrue: false
        },
        {
          answerId: "a7",
          fid: 2,
          text: "大洋洲",
          isTrue: false
        },
        {
          answerId: "a8",
          fid: 2,
          text: "非洲",
          isTrue: true
        }
      ]
    },
    {
      problemId: 3,
      problemTitle: "我国少数民族分布最多的省份？",
      answers: [
        {
          answerId: "a5",
          fid: 3,
          text: "广西",
          isTrue: false
        },
        {
          answerId: "a6",
          fid: 3,
          text: "西藏",
          isTrue: false
        },
        {
          answerId: "a7",
          fid: 3,
          text: "云南",
          isTrue: true
        },
        {
          answerId: "a8",
          fid: 3,
          text: "四川",
          isTrue: false
        }
      ]
    },
    {
      problemId: 4,
      problemTitle: "白菜属于什么科？",
      answers: [
        {
          answerId: "a9",
          fid: 4,
          text: "豆科",
          isTrue: false
        },
        {
          answerId: "a10",
          fid: 4,
          text: "菊科",
          isTrue: false
        },
        {
          answerId: "a11",
          fid: 4,
          text: "十字花科",
          isTrue: true
        },
        {
          answerId: "a12",
          fid: 4,
          text: "蔷薇科",
          isTrue: false
        }
      ]
    },
    {
      problemId: 5,
      problemTitle: "成人身上有多少块骨骼？",
      answers: [
        {
          answerId: "a13",
          fid: 5,
          text: "205",
          isTrue: false
        },
        {
          answerId: "a14",
          fid: 5,
          text: "206",
          isTrue: true
        },
        {
          answerId: "a15",
          fid: 5,
          text: "207",
          isTrue: false
        },
        {
          answerId: "a16",
          fid: 5,
          text: "208",
          isTrue: false
        }
      ]
    }
  ],
  answerId: [],
  userInfo: {
    name: "我就是当前用户",
    avatar: "/static/8.jpg",
    score: 0,
    uid: "u2017"
  },
  isDone: false
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
