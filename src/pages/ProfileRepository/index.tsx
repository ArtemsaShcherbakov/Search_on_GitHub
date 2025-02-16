import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Layout from '../../components/Layout';
import ProfileCard from '../../components/ProfileCard';
import { NavigateButton } from '../../components/UI/Buttons';
import RepositoriesStore from '../../stores/RepositoriesStore';
import { IParamsForGetRepository } from '../../interfaces';

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
      <ProfileCard repository={currentRepository} />
    </Layout>
  );
});

export default ProfileRepository;
