Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.synced_folder "log", "/var/log/awesome-devops-cd"
  config.vm.network  "forwarded_port", guest: 80, host: 80
  config.vm.provision "shell", inline: "apt install -yq nodejs npm"
end
