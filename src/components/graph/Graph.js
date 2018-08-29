
import { connect } from 'react-redux';

import GraphView from './view/GraphView.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/GraphContainer';

export default connect(mapStateToProps, mapDispatchToProps)(GraphView);
