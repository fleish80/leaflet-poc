import {icon} from 'leaflet';
import {appSettingsConfig} from '../../configs/app-settings.config';

export const assets = {
  house: icon({
    iconUrl: `${appSettingsConfig.IMAGES_PATH}/house.ico`,
    iconSize: [50, 40]
  })
};
