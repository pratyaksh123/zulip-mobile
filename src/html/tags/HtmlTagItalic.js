/* @flow */
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import type { Actions, StyleObj } from '../../types';
import styles from '../HtmlStyles';
import renderHtmlChildren from '../renderHtmlChildren';

export default class HtmlTagItalic extends PureComponent {
  props: {
    style: StyleObj,
    actions: Actions,
    cascadingStyle: StyleObj,
  };

  render() {
    const { cascadingStyle, ...restProps } = this.props;

    return (
      <View style={[styles.i, cascadingStyle]}>
        {renderHtmlChildren({ cascadingStyle, ...restProps })}
      </View>
    );
  }
}
