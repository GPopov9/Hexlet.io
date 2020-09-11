import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = ({ children, toggle }) => {
  return (
    <div className="modal-header">
      <div className="modal-title">
        {children}
      </div>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

const Body = ({ children }) => <p className="modal-body">{children}</p>;
const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

export default class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;
    const styles  = { display: isOpen ? 'block' : 'none' };
    const classes = cn({ modal: true, fade: isOpen, show: isOpen });

    return (
      <div className={classes} style={styles}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
// END