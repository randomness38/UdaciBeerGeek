import React, { Component } from 'react';
import { purple, white, blue } from '../../utils/colors'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated
} from 'react-native';

export default class FlipAnswer extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
    }
    flipCard() {
        if (this.value >= 90) {
            Animated.spring(this.animatedValue,{
                toValue: 0,
                friction: 8,
                tension: 10
            }).start();
        } else {
            Animated.spring(this.animatedValue,{
                toValue: 180,
                friction: 8,
                tension: 10
            }).start();
        }

    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate}
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }
        return (
            <View style={styles.container}>
                <View>
                    <Animated.View
                        style={[styles.flipCard, frontAnimatedStyle]}
                    >
                        <Text style={styles.flipText}
                              onPress={() => this.flipCard()}
                        >
                            FLIP ME!
                        </Text>
                    </Animated.View>
                    <Animated.View
                        style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}
                    >
                        <Text
                            style={styles.flipBackText}
                            onPress={() => this.flipCard()}
                        >
                            {this.props.answer}
                        </Text>
                    </Animated.View>
                </View>
                {/*<TouchableOpacity onPress={() => this.flipCard()}>*/}
                    {/*<Text>Flip!</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
    },
    flipCard: {
        width: 400,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: blue,
        position: "absolute",
        top: 0,
    },
    flipText: {
        fontSize: 20,
        color: purple,
        fontWeight: 'bold',
    },
    flipBackText: {
        fontSize: 20,
        color: white,
        fontWeight: 'bold',
    }
});
