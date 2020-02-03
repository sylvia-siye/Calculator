Page({
  data: {
    array: ['A330', 'A320'],
    objectArray: [
      {
        id: 0,
        name: 'A330'
      },
      {
        id: 1,
        name: 'A320'
      },
    ],
    index: 0,
    array2: ['非扩编飞行机组', '扩编飞行机组'],
    objectArray2: [
      {
        id: 0,
        name: '非扩编飞行机组'
      },
      {
        id: 1,
        name: '扩编飞行机组'
      },
      {
        id: 2,
        name: '特定扩编飞行机组'
      },
    ],
    index2: 0,

    array3: ['3名飞行员', '4名飞行员'],
    objectArray3: [
      {
        id: 0,
        name: '3名飞行员'
      },
      {
        id: 1,
        name: '4名飞行员'
      },
    ],
    index3: 0,

    array4: ['1级休息设施', '2级休息设施', '3级休息设施'],
    objectArray4: [
      {
        id: 0,
        name: '1级休息设施'
      },
      {
        id: 1,
        name: '2级休息设施'
      },
      {
        id: 2,
        name: '3级休息设施'
      },
    ],
    index4: 0,

    array5: ['1至4个航段', '5个航段', "6个航段", "7个航段或以上"],
    objectArray5: [
      {
        id: 0,
        name: '1至4个航段'
      },
      {
        id: 1,
        name: '5个航段'
      },
      {
        id: 2,
        name: '6个航段'
      },
      {
        id: 3,
        name: '7个航段或以上'
      },
    ],
    index5: 0,

    multiArray: [['2020-02-02'], ['12:01']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '2020-02-02'
        },
      ], [
        {
          id: 0,
          name: '12:01'
        },
      ]
    ],
    multiIndex: [0, 0],

    date: '2020-02-02',
    time: '12:01',
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  bindPickerChange5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index5: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }

})