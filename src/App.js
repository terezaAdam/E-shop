import Pictures from "./components/Pictures"


const App= ()=> {

    const arrayPictures= [
    {
      id: 1,
      name:"Nature",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 2,
      name: "Forest",
      image: "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
    },
    {
      id: 3,
      name:"Grass",
      image:"https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name:"Sky",
      image:"https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Baloons",
      image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name:"Valley",
      image:"https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    }

    ]

  return (
    <div className="page">
    <div className="title">
    <div className="title-one"><h1>Would you like to buy a beautiful picture?</h1></div>
    <div className="title-two"><h2>Just click - order and enjoy your pic!</h2></div>
    </div>
    <div className="all-pictures">
    <Pictures myPicture={arrayPictures[0].image}>myTitle={arrayPictures[0].name}</Pictures>
    <Pictures myPicture={arrayPictures[1].image}>myTitle={arrayPictures[1].name}</Pictures>
    <Pictures myPicture={arrayPictures[2].image}>myTitle={arrayPictures[2].name}</Pictures>
    <Pictures myPicture={arrayPictures[3].image}>myTitle={arrayPictures[3].name}</Pictures>
    <Pictures myPicture={arrayPictures[4].image}>myTitle={arrayPictures[4].name}</Pictures>
    <Pictures myPicture={arrayPictures[5].image}>myTitle={arrayPictures[5].name}</Pictures>
    </div>
    </div>
  )
}

export default App