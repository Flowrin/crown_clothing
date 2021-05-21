import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.sass';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
