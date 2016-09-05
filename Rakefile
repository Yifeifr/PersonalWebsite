task :default => :new

require 'fileutils'

desc "create a new post"
task :new do
  puts "Please enter the new post URL："
	@url = STDIN.gets.chomp
	puts "Please enter the post's title："
	@name = STDIN.gets.chomp
	puts "Please enter the post's subtitle："
	@subtitle = STDIN.gets.chomp
	puts "Please enter the post's categories(distinguish by a blank space)："
	@categories = STDIN.gets.chomp
	puts "Please enter the post's labels："
	@tag = STDIN.gets.chomp
	@slug = "#{@url}"
	@slug = @slug.downcase.strip.gsub(' ', '-')
	@date = Time.now.strftime("%F")
	@post_name = "_posts/#{@date}-#{@slug}.md"
	if File.exist?(@post_name)
			abort("The post name exists！Failed to create!")
	end
	FileUtils.touch(@post_name)
	open(@post_name, 'a') do |file|
			file.puts "---"
			file.puts "layout: post"
			file.puts "title: #{@name}"
			file.puts "subtitle: #{@subtitle}"
			file.puts "author: Yifei"
			file.puts "date: #{Time.now}"
			file.puts "categories: #{@categories}"
			file.puts "tag: #{@tag}"
			file.puts "---"
	end
	exec "vi #{@post_name}"
end
