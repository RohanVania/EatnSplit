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
  const [selectFriend, setSelectFriend] = useState(null);

  //** Function to check if the image can be resolved or not */
  function testImageUrl(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image();
      image.addEventListener('load', resolve);
      image.addEventListener('error', reject);
      image.src = url;
    });
  }

  //* For selecting which friend is Splitting with whom friend is splitting
  const handleSelectFriend = (friend) => {
    setVisibilityAddform(false)
    setSelectFriend(friend);
    if (friend?.id === selectFriend?.id) {
      setSelectFriend(null);
    }
  }

  //* For handling Add Friend in the list Functionality
  const handleAddFriend = (friend) => {
    setSelectFriend(null);
    console.log("Friend Data =>", friend)
    console.log("Before Adding Friend =>", friendlist)
    const result = testImageUrl(friend.image).then(() => {
      if (result) {
        setFriendList((prev) => {
          return [...prev, friend]
        })
        setVisibilityAddform(false)

      }
    })
      .catch((data) => console.log('Cannot Find Image =>', data))
  }

  //* For handling split bill functionality
  const handleSplitBill = (billObject) => {
    console.log(billObject)
    setFriendList((previousList) => {
      return (
        previousList.map((friend) => friend.id === billObject.id ? { ...friend, ...billObject } : friend)
      )
    })

    setSelectFriend(null)

  }

  return (
    <>
    <div className='rssmall:tw-w-[96%] tw-w-[69%] tw-mx-auto  rssmall:tw-mt-3 tw-mt-4 '>
      <h1 className=' tw-uppercase rssmall:tw-text-[26px] tw-text-[40px] tw-font-semibold tw-text-blue-900'>Split Wisely</h1>
    </div>
      <div className="App  tw-w-[95%] tw-mx-auto tw-mt-[40px] tw-flex tw-flex-wrap-reverse   md:tw-grid tw-gap-y-5  lg:tw-grid-cols-[480px_0.5fr] tw-justify-evenly ">
        <List list={friendlist} handleAddFriend={handleAddFriend} visibilityAddForm={visibilityAddForm} setVisibilityAddform={setVisibilityAddform} selectFriend={handleSelectFriend} selectedFriend={selectFriend} />
        {selectFriend &&
          <div className='tw-bg-[#fdf2e1]  sm:tw-max-h-[450px] tw-min-h-fit'>
            <FormSplitBill selectedFriend={selectFriend} handleSplitBill={handleSplitBill} />
          </div>
        }
      </div>
    </>
  );
}

export default App;
