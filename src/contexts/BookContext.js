import React from "react";

export const BookContext = React.createContext();
//artık contexti default olarak göndermiyorum
class BookContextProivder extends React.Component {
  state = {
    books: [
      {
        title: "Kitap 1",
        author: "yazar 1",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000066424-1.jpg",
        topic:
          "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
      },
      {
        title: "Kitap 2",
        author: "yazar 2",
        pageNum: 126,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001711082001-1.jpg",
        topic:
          "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
      },
      {
        title: "Kitap 3",
        author: "yazar 3",
        pageNum: 356,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000068234-1.jpg",
        topic:
          "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
      },
      {
        title: "Kitap 4",
        author: "yazar 4",
        pageNum: 218,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001731073001-1.jpg",
        topic:
          "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
      },
    ],
  };
  render() {
    return (
      <BookContext.Provider value={this.state}>
        {this.props.children}
      </BookContext.Provider>
    );
  }

  //console.log(myContext);
}
export default BookContextProivder;

/* 
? 1-) Default Value  ---> this.context
contexti oluşturup varsayılan değer oluşturucaz (başlangıç değeri) nesne array olabilir değişken de olabilir
varsayılan değeri ilgili componente ileticez ---> this.context

* - context nesnesini oluşturduk.  
* - başlangıç değeri verdik ve export ettik.  
* - ilgili componentte import ettik.  
* - context type yardımıyla contexti ilgili componente atadık.  
* - this.context yardımıyla ilgili veriye ulaştık.  
 
? 2-) Provider ---> Consumer
Parent component içinde provider component oluşturup veriyi göndermek istediğimiz componentte consumer oluşturmak

* - Class component oluşturup veriyi state içerisine koyduk.
* - Contexte ait Provider ile State'de bulunan veriyi aldık.
* - Parent child ilişkisi {this.props.children}
* - Veriyi göndereceğimiz componenta Contexti import ediyoruz.
* - Render içerisinde Consumer ile Providerdan gelen veriyi yakalıyoruz.

*/
