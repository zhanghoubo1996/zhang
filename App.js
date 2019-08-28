import React, {Component} from 'react';
import "./App.css";
import PictureSelect from "./hom";
const App = () => {
  const [value, setValue] = React.useState(['1']);
  const picutres = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ',
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ',
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ',
    },
  ]; // 同上面的数据

  console.log(value); // 输出用户选择图片 id。
  let pictures = picutres.map(item=>{
    item["istrue"]=false;
    return item
  }) ;

  return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};

export default App;
