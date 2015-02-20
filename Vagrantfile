# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.provision :shell, privileged: true, inline: <<-SCRIPT
    if [ -z `which node` ]; then
      echo "Installing necessary packages..."
      apt-get update
      apt-get install nodejs npm git -y
      npm install -g grunt-cli
      ln -s /usr/bin/nodejs /usr/bin/node
     fi;
  SCRIPT

  config.vm.provision :shell, privileged: true, inline: <<-SCRIPT
    cd /vagrant
    mkdir -p log


    echo 'Fix potential git problem with Bower set up and connecting to github'
    git config --global url."https://".insteadOf git://

    # piping output because express crashes when stdout/stderr is disconnected
    killall node
    nohup script/server > log/express.log 2>&1 &

    echo 'Waiting for server to start...'
    while true; do
      lsof -i :3000 > /dev/null
      if [[ $? == 0 ]]; then
        break
      fi;
    done
  SCRIPT

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  # config.ssh.forward_agent = true
  #
end
