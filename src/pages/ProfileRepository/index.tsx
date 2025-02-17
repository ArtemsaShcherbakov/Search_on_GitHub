import { FC, useEffect, Suspense, lazy, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Layout from '../../components/Layout';
import { NavigateButton } from '../../components/UI/Buttons';
import Loader from '../../components/UI/Loader';
import repositoriesStore from '../../stores/RepositoriesStore';
import { IParamsForGetRepository } from '../../interfaces';

const ProfileCard = lazy(() => import('../../components/ProfileCard'));

const ProfileRepository: FC = observer(() => {
  const { owner, repo } = useParams<IParamsForGetRepository>();

  const { currentRepository, getRepositoryByNameOwnerAndRepository } =
    repositoriesStore;

  const navigate = useNavigate();

  useEffect(() => {
    getRepositoryByNameOwnerAndRepository({ owner, repo });
  }, [owner, repo, getRepositoryByNameOwnerAndRepository]);

  const handleToBackPage = useCallback(() => navigate(-1), [navigate]);

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
