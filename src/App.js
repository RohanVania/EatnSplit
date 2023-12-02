import './App.css';
import List from "./component/List"
import FormSplitBill from './component/FormSplitBill';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0
  }
]

function App() {
  const [friendlist, setFriendList] = useState(initialFriends);
  const [visibilityAddForm, setVisibilityAddform] = useState(false)

  //** Function to check if the image can be resolved or not */
  function testImageUrl(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      image.addEventListener('load', resolve);
      image.addEventListener('error', reject);
      image.src = url;
    });
  }

  const handleAddFriend = (friend) => {
    console.log("Before Adding Friend =>", friendlist)
    const result = testImageUrl(friend.image).then(() => {
      if (result) {
        setFriendList((prev) => {
          return [...prev, friend]
        })

        setVisibilityAddform(false)
      }
    })
    .catch(()=>console.log('Cannot Find Image'))

  }

  return (
    <div className="App  tw-w-[95%] tw-mx-auto tw-mt-[40px] tw-flex tw-flex-wrap-reverse   md:tw-grid tw-gap-y-5  lg:tw-grid-cols-[480px_0.5fr] tw-justify-evenly ">
      <List list={friendlist} handleAddFriend={handleAddFriend} visibilityAddForm={visibilityAddForm} setVisibilityAddform={setVisibilityAddform}/>
      <div className='tw-bg-[#fdf2e1]  tw-max-h-[450px]'>
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;
