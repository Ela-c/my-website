pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'cypress/base:latest'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''echo \'Installing npm dependencies...\'
npm install
npm install netlify-cli --save-dev
echo \'Building the Next.js project...\'
npm run build'''
      }
    }

    stage('Test') {
      steps {
        sh '''echo \'Running Cypress End-to-End tests...\'
npm run e2e:headless'''
        sh '''echo \'Running Cypress Component tests...\'
npm run component:headless'''
      }
    }

    stage('Deploy') {
      steps {
        script {
          def deployOutput = sh(script: 'netlify deploy --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN', returnStdout: true).trim()
          echo "Deploy Output: ${deployOutput}"
          def previewUrl = (deployOutput =~ /Website Draft URL: (.+)$/)[0][1]
          echo "Preview URL: ${previewUrl}"
          env.PREVIEW_URL = previewUrl
        }

        input 'Finished using the web site? (Select "Proceed" to continue)'
      }
    }

    stage('Release') {
      steps {
        sh '''echo \'Deploying to Netlify...\'
netlify deploy --prod --auth $NETLIFY_AUTH_TOKEN --site $NETLIFY_SITE_ID'''
      }
    }

  }
  environment {
    CC_TEST_REPORTER_ID = 'dce821823056433ff4908529b88570289e59ca46456b082a950d68e230167ada'
    NETLIFY_AUTH_TOKEN = 'nfp_rhi7zX9x9K4Aeb7EJCVHgLjJEYWTnqHM7604'
    NETLIFY_SITE_ID = '26cdc381-87b6-4680-82f7-ed3e5d6e377b'
  }
}