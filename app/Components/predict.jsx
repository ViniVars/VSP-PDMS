const data = [
    {
        '   ': 569,
        DEL_DATE: '27-03-2005',
        SHOP_CODE: 2,
        DELAY_FROM: 9.3,
        DELAY_TO: 11.1,
        DELAY_DURN: 1.4,
        CUM_DELAY: 1.4,
        EQPT: 'LOCP',
        SUB_EQPT: 'CO-48',
        REMARKS: 'BELT THROUGH CUT',
        DELAY_DET_CODE: 270,
        AGENCY_CODE: 'M',
        DELAY_FREQ: 1,
        EFF_DURATION: 1.666666667,
        DELAY_ID: 11
    },
    {
        '   ': 572,
        DEL_DATE: '27-03-2005',
        SHOP_CODE: 2,
        MATERIAL: 'I-O-L',
        RAKE: 562,
        DELAY_FROM: 11,
        DELAY_TO: 11.4,
        DELAY_DURN: 0.4,
        CUM_DELAY: 0.4,
        EQPT: 'OT-2',
        REMARKS: 'STREAM CHG',
        DELAY_DET_CODE: 180,
        AGENCY_CODE: 'C',
        DELAY_FREQ: 1,
        EFF_DURATION: 0.666666667,
        DELAY_ID: 14
    },
    {
        '   ': 579,
        DEL_DATE: '27-03-2005',
        SHOP_CODE: 2,
        MATERIAL: 'BF-LS',
        DELAY_FROM: 5.45,
        DELAY_TO: 6,
        DELAY_DURN: 0.15,
        CUM_DELAY: 0.15,
        EQPT: 'OT-2',
        REMARKS: 'RC & PWT',
        DELAY_DET_CODE: 121,
        AGENCY_CODE: 'C',
        DELAY_FREQ: 1,
        CONTINUED: 'Y',
        EFF_DURATION: 0.25,
        DELAY_ID: 58
    },
    {
        '   ': 584,
        DEL_DATE: '27-03-2005',
        SHOP_CODE: 2,
        DELAY_FROM: 22,
        DELAY_TO: 5.45,
        DELAY_DURN: 7.45,
        CUM_DELAY: 7.45,
        EQPT: 'OT-2',
        REMARKS: 'IDLE',
        DELAY_DET_CODE: 0,
        AGENCY_CODE: 'ID',
        DELAY_FREQ: 1,
        EFF_DURATION: 7.75,
        DELAY_ID: 26
    }
];

import React from 'react'

import * as tf from '@tensorflow/tfjs';
export default function predict() {
    // Import TensorFlow.js

// Sample data
const sampleData = [
  { date: '2024-06-01', delay: 5 },
  { date: '2024-06-02', delay: 10 },
  { date: '2024-06-03', delay: 8 }
];

// Data preprocessing
const formattedData = sampleData.map(({ date, delay }) => {
  // Parse date string and convert it to a numerical value (e.g., timestamp)
  const timestamp = new Date(date).getTime();
  return { features: [timestamp], label: delay };
});

// Split data into features (input) and labels (output)
const features = formattedData.map(({ features }) => features);
const labels = formattedData.map(({ label }) => label);

// Convert data to tensors
const trainFeatures = tf.tensor2d(features);
const trainLabels = tf.tensor1d(labels);

// Define your model architecture
const model = tf.sequential();
model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [1] }));
model.add(tf.layers.dense({ units: 1 }));

// Compile the model
model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

// Train the model
async function trainModel() {
  const history = await model.fit(trainFeatures, trainLabels, {
    epochs: 100,
    validationSplit: 0.2,
    callbacks: {
      onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch}: loss = ${logs.loss}`)
    }
  });
  console.log('Training complete');
}

// Make predictions
async function makePredictions(newData) {
  const predictions = await model.predict(tf.tensor2d(newData)).data();
  const formattedPredictions = predictions.map(prediction => {
    // Convert milliseconds to hours (assuming delays are in milliseconds)
    const hours = prediction / (1000 * 60 * 60);
    return hours.toFixed(2); // Round to 2 decimal places
  });

  console.log('Predictions (in hours):', formattedPredictions);
}

// Example usage
trainModel().then(() => {
  // Model training is complete, you can now make predictions
  const newData = [
    [new Date('2024-06-04').getTime()], // Example input data for prediction
    [new Date('2024-06-05').getTime()]  // Additional input data
  ];
  makePredictions(newData);
});

  return (
    <div>
      
    </div>
  )
}
