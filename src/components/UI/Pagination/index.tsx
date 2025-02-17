import { FC } from 'react';
import { Button } from '../Buttons';
import { INIT_STATE_PAGE } from '../../../constants';
import './style.css';

interface IPaginationProps {
  hanldePrevData: () => void;
  hanldeNextData: () => void;
  currentPage: number;
  countOfPages: number;
}

const Pagination: FC<IPaginationProps> = ({
  hanldePrevData,
  hanldeNextData,
  countOfPages,
  currentPage,
}) => (
  <nav className="pagination">
    <ul className="pagination-list">
      <li>
        <Button
          type="button"
          textButton="&laquo;"
          handleOnClick={hanldePrevData}
          disabled={currentPage === INIT_STATE_PAGE}
        />
      </li>
      <li>
        <p>
          Page {currentPage} from {countOfPages}
        </p>
      </li>
      <li>
        <Button
          type="button"
          textButton="&raquo;"
          handleOnClick={hanldeNextData}
          disabled={currentPage === countOfPages}
        />
      </li>
    </ul>
  </nav>
);

export default Pagination;
