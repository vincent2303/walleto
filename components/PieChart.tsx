import React from 'react'
import Pie from 'react-native-pie';
import { StyleSheet, View } from 'react-native';
import { colors, dimensions } from '../global/styles';

interface Props {
    percentage:number,
}

const AppScreenContainer = ({ percentage } : Props) => (
    <View style={styles.container}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
            }}
          >
            <Pie
                radius={80}
                sections={[
                {
                    percentage: 10,
                    color: '#C70039',
                },
                {
                    percentage: 20,
                    color: '#44CD40',
                },
                {
                    percentage: 30,
                    color: '#404FCD',
                },
                {
                    percentage: 40,
                    color: '#EBD22F',
                },
                ]}
                dividerSize={6}
                strokeCap={'butt'}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 2,
    borderRadius: 10,
    padding: dimensions.unit * 1.5,
  },
  pirStyle: 
});