import styles from "./index.module.scss";
import DestinationGallery from "../../components/DestinationGallery";
import TravelersExperiences from "../../components/TravelersExperiences";
import SubscribeForm from "../../components/SubscribeForm";

const Travel = () => {
  return (
    <div id="Travel" className={styles.travel}>
      <div className={styles.travelContainer}>
        <DestinationGallery />
        <TravelersExperiences />
      </div>
      <SubscribeForm />
    </div>
  );
};

export default Travel;
