import React, { useState } from 'react';
import { Divider,Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faRoad,
  faSeedling,
  faUser,
  faShieldAlt,
  faHeartbeat,
  faTree,
} from '@fortawesome/free-solid-svg-icons';

import './SobreNosotros.css';

export const SobreNosotros = () => {
  const [tabPosition, setTabPosition] = useState('right');

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
 
    <>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(7).fill(null).map((_, i) => {
            const id = String(i + 1);
            const iconMap = {
            1: <FontAwesomeIcon icon={faGraduationCap} />,
            2: <FontAwesomeIcon icon={faRoad} />,
            3: <FontAwesomeIcon icon={faSeedling} />,
            4: <FontAwesomeIcon icon={faUser} />,
            5: <FontAwesomeIcon icon={faShieldAlt} />,
            6: <FontAwesomeIcon icon={faHeartbeat} />,
            7: <FontAwesomeIcon icon={faTree} />,
            };

            return {
            label: iconMap[i + 1],
            key: id,
            children: `Content of Tab ${id}`,
            };
        })}
        />
         <Divider />
         <Divider />
         </>
  );
};
