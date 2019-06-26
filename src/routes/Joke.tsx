/**
 * @file [Joke]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-04-22 18:19:25
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import React, {Component} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Box, palette, Flex} from '@baidu/rubik-ui';
interface Props {}
interface State {}
class Joke extends Component<Props, State> {
    state: State;

    static defaultProps = {};

    render() {
        return <div>Joke</div>;
    }
}
export default Joke;
