#!/usr/bin/env -S deno run -A --config=./deno.json --check --reload --watch-hmr

/**
 * Connecting to MongoDB database that requires SSL doesn't work in deno@2.0.4, But it works in node@23.1.0.
 */

'use strict';

import {
  MongoClient,
} from 'npm:mongodb';

const mongoClientConfig = {
  authMechanism: 'MONGODB-X509',
  authSource: '$external',
  maxPoolSize: 10000,
  maxConnecting: 100,
  retryReads: true,
  retryWrites: true,
  serverMonitoringMode: 'auto',
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
  tlsCAFile: import.meta.resolve( `./mongodb-ssl/MongoDBSSL001_Root_CA.pem` ).slice( 8 ),
  tlsCertificateKeyFile: import.meta.resolve( `./mongodb-ssl/MongoDBSSL001_Clients_CA.pem` ).slice( 8 ),
};

async function Run(){
  const client = new MongoClient( 'mongodb://127.0.0.1:27777', mongoClientConfig );

  try{
    const database = client.db( 'local' ),
      startup_log_collection = database.collection( 'startup_log' ),
      startup_log = await startup_log_collection.find().toArray();

    console.dir( startup_log );
  }
  catch( e ){
    console.error( e );
  }
  finally{
    await client.close( true );
  }
}

await Run();
