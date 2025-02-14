import { FC } from 'react';
import { Button } from '../Buttons';
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
        />
      </li>
    </ul>
  </nav>
);

export default Pagination;
