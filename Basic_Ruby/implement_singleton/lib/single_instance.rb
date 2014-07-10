class SingleInstance
  def SingleInstance.new
      @@instance ||= super
  end
end
