import app_intell_data from '../projectsData/application-intelligence.json'
import app_firma_facil_data from '../projectsData/app-firma-facil.json'
import big_data_data from '../projectsData/big-data.json'


export const projects = {
    "application-intelligence": {
      title: app_intell_data.projectName,
      description: app_intell_data.summary,
    },
    "app-firma-facil": {
      title: app_firma_facil_data.projectName,
      description: app_firma_facil_data.summary,
    },
    "big-data": {
      title: big_data_data.projectName,
      description: big_data_data.summary,
    },
  };
  