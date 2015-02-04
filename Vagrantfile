# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  if Vagrant.has_plugin?('vagrant-cachier')
    config.cache.scope = :box
  else
    puts "Run `vagrant plugin install vagrant-cachier` to reduce caffeine intake when provisioning"
  end

  config.vm.provision :shell, privileged: true, inline: <<-SCRIPT
    echo "Installing necessary packages..."
    curl -sSL https://deb.nodesource.com/setup | sudo bash -
    apt-get install -y build-essential git nodejs
    npm install -g grunt-cli

    echo 'Fix potential git problem with Bower set up and connecting to github'
    git config --global url."https://".insteadOf git://
  SCRIPT

  config.vm.provision :shell, privileged: false, inline: <<-SCRIPT
    cd /vagrant
    npm install

    echo "Provisioning complete, run:"
    echo "  vagrant ssh -c /vagrant/script/server"
    echo "to start the server"
  SCRIPT
end
