import Benefits from "../style/benefitsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faUndoAlt,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
const BenefitsSection = () => (
  <Benefits>
    <Benefits.Container>
      <Benefits.Box>
        <Benefits.BoxIcon>
          <FontAwesomeIcon icon={faShippingFast} />
        </Benefits.BoxIcon>
        <Benefits.BoxInfo>
          <Benefits.BoxTitle>Free Shipping</Benefits.BoxTitle>
          <Benefits.BoxSubtitle>Lorem Ipsum Dolor</Benefits.BoxSubtitle>
        </Benefits.BoxInfo>
      </Benefits.Box>
      <Benefits.Box>
        <Benefits.BoxIcon>
          <FontAwesomeIcon icon={faLifeRing} />
        </Benefits.BoxIcon>
        <Benefits.BoxInfo>
          <Benefits.BoxTitle>Support 24/7</Benefits.BoxTitle>
          <Benefits.BoxSubtitle>Lorem Ipsum Dolor</Benefits.BoxSubtitle>
        </Benefits.BoxInfo>
      </Benefits.Box>
      <Benefits.Box>
        <Benefits.BoxIcon>
          <FontAwesomeIcon icon={faUndoAlt} />
        </Benefits.BoxIcon>
        <Benefits.BoxInfo>
          <Benefits.BoxTitle>Money Return</Benefits.BoxTitle>
          <Benefits.BoxSubtitle>Lorem Ipsum Dolor</Benefits.BoxSubtitle>
        </Benefits.BoxInfo>
      </Benefits.Box>
      <Benefits.Box>
        <Benefits.BoxIcon>
          <FontAwesomeIcon icon={faTags} />
        </Benefits.BoxIcon>
        <Benefits.BoxInfo>
          <Benefits.BoxTitle>Discount</Benefits.BoxTitle>
          <Benefits.BoxSubtitle>Lorem Ipsum Dolor</Benefits.BoxSubtitle>
        </Benefits.BoxInfo>
      </Benefits.Box>
    </Benefits.Container>
  </Benefits>
);

export default BenefitsSection;
