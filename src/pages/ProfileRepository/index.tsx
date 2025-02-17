import { FC, useEffect, Suspense, lazy } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Layout from '../../components/Layout';
import { NavigateButton } from '../../components/UI/Buttons';
import Loader from '../../components/UI/Loader';
import RepositoriesStore from '../../stores/RepositoriesStore';
import { IParamsForGetRepository } from '../../interfaces';

const ProfileCard = lazy(() => import('../../components/ProfileCard'));

const ProfileRepository: FC = observer(() => {
  const { owner, repo } = useParams<IParamsForGetRepository>();

  const { currentRepository, getRepositoryByNameOwnerAndRepository } =
    RepositoriesStore;

  const navigate = useNavigate();

  useEffect(() => {
    getRepositoryByNameOwnerAndRepository({ owner, repo });
  }, []);

  const handleToBackPage = () => navigate(-1);

  return (
    <Layout>
      <NavigateButton
        type="button"
        textButton="Back"
        handleOnClick={handleToBackPage}
      />
      <Suspense fallback={<Loader />}>
        <ProfileCard repository={currentRepository} />
      </Suspense>
    </Layout>
  );
});

export default ProfileRepository;
