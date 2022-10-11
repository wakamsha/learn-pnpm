import { createRoot } from 'react-dom/client';
import { applyGlobalStyle, applyResetStyle } from '@learn-react/core/helpers/Style';
import { NestRoutesDeep } from './App';

applyResetStyle();

applyGlobalStyle();

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(<NestRoutesDeep />);
