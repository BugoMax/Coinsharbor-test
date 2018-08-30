
import { connect } from 'react-redux';

import TableView from './view/TableView.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/TableContainer';

export default connect(mapStateToProps, mapDispatchToProps)(TableView);
