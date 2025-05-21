import React from 'react'
import b1 from '../img/b1.png'

function Wypozyczalnia({datas}) {
  return (
    <div className='wypozyczalnia-container'>
      <div className='info'>
        <img src={b1} alt='info'></img>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis sunt nemo eius nulla ipsam. Atque ex enim magnam unde fugiat velit quisquam! Dolores odio, modi provident consequuntur odit quidem?
        Ab sapiente cupiditate quibusdam a vel molestiae, harum consequatur odit optio dolorum. Et cum praesentium fugiat, nulla maiores reprehenderit aliquid explicabo labore libero consequuntur nostrum hic saepe numquam. Earum, excepturi.
        Velit rerum exercitationem sequi praesentium ipsum nisi! Consequatur voluptas modi totam, reprehenderit rem temporibus dolores eius dicta adipisci architecto harum, excepturi nemo distinctio placeat corporis nisi iusto? Voluptas, voluptatum! Reprehenderit!
        Architecto blanditiis mollitia harum odio numquam magnam dolorum provident cumque, excepturi iste dolorem, eveniet tenetur repellat, animi quibusdam sunt hic quo illum corporis quasi qui vel minus deleniti perspiciatis. Fuga.Velit rerum exercitationem sequi praesentium ipsum nisi! Consequatur voluptas modi totam, reprehenderit rem temporibus dolores eius dicta adipisci architecto harum, excepturi nemo distinctio placeat corporis nisi iusto? Voluptas, voluptatum! Reprehenderit!
        Architecto blanditiis mollitia harum odio numquam magnam dolorum provident cumque, excepturi iste dolorem, eveniet tenetur repellat, animi quibusdam sunt hic quo illum corporis quasi qui vel minus deleniti perspiciatis. Fuga.
        </p>
      </div>

      <div className='books-all'>
        {datas.map( () => {
          
        })}
      </div>
    </div>
  )
}

export default Wypozyczalnia