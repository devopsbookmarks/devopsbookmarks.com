Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  if Vagrant.has_plugin?('vagrant-cachier')
    config.cache.scope = :box
  else
    puts "Run `vagrant plugin install vagrant-cachier` to reduce caffeine intake when provisioning"
  end

  config.vm.provision :shell, privileged: true, inline: <<-SCRIPT
    yum update
    yum install -y curl vim build-essential git
    echo "Installing necessary packages..."
    curl -sSL https://rpm.nodesource.com/setup_13.x | sudo bash -
    yum install -y nodejs
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
