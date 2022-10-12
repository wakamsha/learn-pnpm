import { css } from '@emotion/css';
import { PageTransition } from '@learn-pnpm/core/components/utils/PageTransition';
import { gutter } from '@learn-pnpm/core/helpers/Style';
import { Navigate, Route } from 'react-router-dom';
import { Router } from '../../../@core/constants/Router';
import { ProfileContainer } from '../../containers/ProfileContainer';
import { ProfileEditPage } from './EditPage';
import { ProfileShowPage } from './ShowPage';

export const ProfilePage = () => (
  <section className={styleBase}>
    <h1>Profile</h1>
    <ProfileContainer.Provider>
      <PageTransition>
        <Route index element={<Navigate replace to={Router.paths.profileShow} />} />
        <Route path={Router.paths.profileShow} element={<ProfileShowPage />} />
        <Route path={Router.paths.profileEdit} element={<ProfileEditPage />} />
      </PageTransition>
    </ProfileContainer.Provider>
  </section>
);

const styleBase = css`
  padding: ${gutter(4)};
`;
