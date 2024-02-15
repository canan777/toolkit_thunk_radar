import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const ListView = ({ openModal }) => {
  const state = useSelector((store) => store);

  // gösterilcek ilk elemanı hesaplar
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına gösterilcek eleman sayısı
  const itemsPerPage = 10;

  // gösterilcek son elemanı hesaplar
  const endOffset = itemOffset + itemsPerPage;

  // elimizdeki aralığa göre verileri kesiyorusz
  const currentItems = state.flights?.slice(itemOffset, endOffset);

  // toplam sayfa sayısını hesapla
  const pageCount = Math.ceil(state.flights?.length / itemsPerPage);

  // her sayfa değiştiğinde çalışır
  const handlePageClick = (event) => {
    // gösterlicek ilk elemanı belirler
    const newOffset = event.selected * itemsPerPage;

    // state'i günceller
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-hover mt-5 table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td>
                <button onClick={() => openModal(i.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< geri"
        className="pagination"
      />
    </div>
  );
};

export default ListView;
