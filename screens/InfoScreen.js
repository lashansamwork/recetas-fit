import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Linking,
  Platform,
  Touchable,
  Pressable,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Paragraph, Button, Title} from 'react-native-paper';

function InfoScreen() {
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={{width: '100%', alignItems: 'center'}}>
        <Card.Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Paragraph style={{alignSelf: 'center'}}>
              Sobre la fuente de información médica y de salud: Las
              recomendaciones médicas, cálculos y referencias provistas en esta
              aplicación fueron redactadas por: - María Casas, Farmacéutica, con
              número de colegiada #24381 - Hamlet Sosa, Médico, con número de
              Licencia Médica: #282880737 Según la Ley 19/1998, de 25 de
              noviembre, de Ordenación y Atención Farmacéutica de la Comunidad
              de Madrid, los Farmacéuticos y Médicos tienen la competencia de:
              1. Participar en la prevención de las enfermedades, la promoción
              de hábitos de vida y entornos saludables y la educación
              sanitaria.” 2. Participar en la educación sanitaria a la
              población. Se entiende por tal proporcionar información sobre la
              salud y estilos de vida de forma que el individuo receptor
              modifique sus actitudes y adopte comportamientos que le permitan
              mantener o mejorar su salud y evitar la enfermedad. 3. Participar
              en actividades de promoción de la salud y prevención de la
              enfermedad, proporcionando la información y consejo necesarios
              para incrementar la responsabilidad del individuo sobre su salud.”
              Sobre el uso de dicha información: La información contenida en
              esta aplicación no se ha hecho con intención diagnostica y no se
              debe utilizar de forma diagnostica ni para el trato de ninguna
              enfermedad. Siempre que se quiera tomar una acción o decisión
              sobre su salud hágalo consultando a su medico y/o a las
              autoridades sanitarias correspondientes en España, para más
              información visita este enlace:
            </Paragraph>
            <TouchableOpacity
              onPress={() => {
                handlePress(
                  'https://www.mscbs.gob.es/ciudadanos/proteccionSalud/home.htm',
                );
              }}>
              <Paragraph style={{color: 'blue'}}>
                https://www.mscbs.gob.es/ciudadanos/proteccionSalud/home.htm
              </Paragraph>
            </TouchableOpacity>
          </ScrollView>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    borderColor: 'grey',
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 20,
  },
  view1: {
    flex: 1,
    width: '100%',
  },
  view2: {
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.5,
    height: '10%',
    width: '100%',
  },
  text1: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  pdf: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default InfoScreen;
