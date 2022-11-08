
import React, { useState } from 'react';
import { useDidShow } from '@tarojs/taro';
import { Avatar } from '@nutui/nutui-react-taro'

const Index = () => {
  const [userInfo, setUserInfo] = useState({

    avatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.29a84eb867bf75b5327e7df3b1a7e32c?rik=iW9zjAJwqTB%2fdA&riu=http%3a%2f%2ftupian.qqw21.com%2farticle%2fUploadPic%2f2019-7%2f201971622263482217.jpeg&ehk=W4G6YV7SJ1LFEFGJ3r%2bsC66stsnts%2bGu%2b7tsCcMPWGA%3d&risl=&pid=ImgRaw&r=0'
  })


  /**
   * 初始化页面数据
   */
  const initData = async () => {


    const userRes = {
      // avatar:'https://ts1.cn.mm.bing.net/th/id/R-C.29a84eb867bf75b5327e7df3b1a7e32c?rik=iW9zjAJwqTB%2fdA&riu=http%3a%2f%2ftupian.qqw21.com%2farticle%2fUploadPic%2f2019-7%2f201971622263482217.jpeg&ehk=W4G6YV7SJ1LFEFGJ3r%2bsC66stsnts%2bGu%2b7tsCcMPWGA%3d&risl=&pid=ImgRaw&r=0'
      avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.tOK37UOboLiWV-hMey-iTAAAAA?pid=ImgDet&rs=1'

    }
    // setTimeout(() => {
    //   //
    //   setUserInfo(userRes)
    // }, 2000);

    setUserInfo(userRes)

  }




  // 对应 onShow
  useDidShow(() => {
    console.log("onshow")
    initData()
  })


  return (
    <>

      <Avatar size='large' url={userInfo.avatar} />

    </>
  );
}
export default Index;