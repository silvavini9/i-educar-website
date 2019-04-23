npm install
cd website
rm -rf ./build/
npm run build
FileName=`date +%y_%m_%d_%H_%M_%S`;
tar -cvzf build_$FileName.tar.gz ./build;
scp -r ./build_$FileName.tar.gz gerencia@200.19.32.125:/home/gerencia/Documentos/build_$FileName.tar.gz;
CP="cd /home/gerencia/Documentos/; rm -rf ieducar_site; tar -xvzf build_$FileName.tar.gz; mv build ieducar_site;"
ssh gerencia@200.19.32.125 "${CP}";
