import { useEffect, useState } from 'react';
import Header from './components/Header';
import ListView from './pages/ListView';
import MapView from './pages/MapView';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions/flightAction';
import Modal from './components/Modal';

function App() {
  const [isMapView, setIsMapView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  // modalı açar
  const openModal = (id) => {
    setDetailId(id); // hangi uçak için açıldığının state'i
    setIsOpen(true); // modalı'ı açar
  };

  // odal'ı kapatır
  const closeModal = () => {
    setDetailId(null);
    setIsOpen(false);
  };

  useEffect(() => {
    setInterval(() => {
      dispatch(getFlights());
    }, 5000);
  }, []);

  return (
    <>
      <Header />

      <div className="view-buttons">
        <button
          className={isMapView ? 'active' : ''}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!isMapView ? 'active' : ''}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {/* hangi bileşenin ekran ageliceğini belirleme */}
      {isMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {/* modal bileşeni */}
      {isOpen && (
        <Modal detailId={detailId} closeModal={closeModal} />
      )}
    </>
  );
}

export default App;